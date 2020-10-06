const { runTest } = require('api-diligence');
const { getAuthToken } = require('./authTokens');
const { appFactory } = require('for-io-runtime');
const appSetup = require('../app.setup');

const state = {};

runTest({
    name: 'auth',
    opts: {
        appSetup,
        appFactory,
        mockAuth: true,
        getAuthToken, // this will be needed if real auth is configured (mockAuth: false)
    },
    config: {
        USE_MOCKS: false,
    },
    precondition: {},
    cases: [{
        name: 'add new user, login and update profile',
        steps: [{
            request: {
                method: 'POST',
                url: '/users',
                body: {
                    username: "kirk",
                    password: "abc",
                    email: "kirk@example.com",
                    firstName: "James",
                    lastName: "Kirk",
                }
            },
            200: { _id: 'kirk' },
            postcondition: {
                users: [{
                    _id: "kirk",
                    email: "kirk@example.com",
                    passwordHash: "***",
                    firstName: "James",
                    lastName: "Kirk",
                }]
            },
        }, {
            request: {
                method: 'POST',
                url: '/login',
                body: {
                    username: "kirk",
                    password: "abc",
                }
            },
            200: {
                token: (val) => { state.authToken = val },
            },
        }, {
            request: {
                method: 'PATCH',
                url: '/users/kirk',
                headers: {
                    Authorization: () => `Bearer ${state.authToken}`,
                },
                body: {
                    firstName: "J.",
                    lastName: "KIRK",
                }
            },
            200: { ok: true },
            postcondition: {
                users: [{
                    _id: "kirk",
                    email: "kirk@example.com",
                    passwordHash: "***",
                    firstName: "J.",
                    lastName: "KIRK",
                }]
            },
        }, {
            request: {
                method: 'PATCH',
                url: '/users/kirk',
                headers: {
                    Authorization: () => `Bearer WRONG-TOKEN`,
                },
                body: {
                    firstName: "X",
                    lastName: "Y",
                }
            },
            401: {},
        }],
    }],
});