export const doc = swaggerDoc({
    info: {
        title: 'Employee API',
        version: '1.0.0',
        description: 'A system for distributing equipments to employees',
    },
    host: 'localhost:9000',
    basePath: '/',
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [
        { name: 'Employee', description: 'Employee operations' },
        { name: 'User', description: 'User operations' }
    ],
    paths: {
        '/employees': {
            get: {
                tags: ['Employee'],
                summary: 'Get all employees',
                responses: {
                    200: {
                        description: 'Employees were obtained',
                        schema: {
                            type: 'array',
                            items: {
                                $ref: '#/definitions/Employee'
                            }
                        }
                    },
                    500: {
                        description: 'Internal server error'
                    }
                }
            }
        },
        '/employee/{id}': {
            get: {
                tags: ['Employee'],
                summary: 'Get employee by id',
                parameters: [
                    {
                        name: 'id',
                        in: 'path',
                        required: true,
                        type: 'string'
                    }
                ],
                responses: {
                    200: {
                        description: 'Employee was obtained',
                        schema: {
                            $ref: '#/definitions/Employee'
                        }
                    },
                    500: {
                        description: 'Internal server error'
                    }
                }
            }
        },
        '/employees/addEmployee': {
            post: {
                tags: ['Employee'],
                summary: 'Create employee',
                parameters: [
                    {
                        name: 'employee',
                        in: 'body',
                        required: true,
                        schema: {
                            $ref: '#/definitions/Employee'
                        }
                    }
                ],
                responses: {
                    201: {
                        description: 'Employee was created',
                        schema: {
                            $ref: '#/definitions/Employee'
                        }
                    },
                    500: {
                        description: 'Internal server error'
                    }
                }
            }
        },
        '/employees/updateEmployee/{id}': {
            put: {
                tags: ['Employee'],
                summary: 'Update employee by id',
                parameters: [
                    {
                        name: 'id',
                        in: 'path',
                        required: true,
                        type: 'string'
                    },
                    {
                        name: 'employee',
                        in: 'body',
                        required: true,
                        schema: {
                            $ref: '#/definitions/Employee'
                        }
                    }
                ],
                responses: {
                    201: {
                        description: 'Employee was updated',
                        schema: {
                            $ref: '#/definitions/Employee'
                        }
                    },
                    500: {
                        description: 'Internal server error'
                    }
                }
            }
        },
        '/employees/deleteEmployee/{id}': {
            delete: {
                tags: ['Employee'],
                summary: 'Delete employee by id',
                parameters: [
                    {
                        name: 'id',
                        in: 'path',
                        required: true,
                        type: 'string'
                    }
                ],
                responses: {
                    201: {
                        description: 'Employee was deleted',
                        schema: {
                            $ref: '#/definitions/Employee'
                        }
                    },
                    500: {
                        description: 'Internal server error'
                    }
                }
            }
        },
        '/users': {
            get: {
                tags: ['User'],
                summary: 'Get all users',
                responses: {
                    200: {
                        description: 'Users were obtained',
                        schema: {
                            type: 'array',
                            items: {
                                $ref: '#/definitions/User'
                            }
                        }
                    },
                    500: {
                        description: 'Internal server error'
                    }
                }
            }
        },
        '/user/{id}': {
            get: {
                tags: ['User'],
                summary: 'Get user by id',
                parameters: [
                    {
                        name: 'id',
                        in: 'path',
                        required: true,
                        type: 'string'
                    }
                ],
                responses: {
                    200: {
                        description: 'User was obtained',
                        schema: {
                            $ref: '#/definitions/User'
                        }
                    },
                    500: {
                        description: 'Internal server error'
                    }
                }
            }
        },
        '/users/addUser': {
            post: {
                tags: ['User'],
                summary: 'Create user',
                parameters: [
                    {
                        name: 'user',
                        in: 'body',
                        required: true,
                        schema: {
                            $ref: '#/definitions/User'
                        }
                    }
                ],
                responses: {
                    201: {
                        description: 'User was created',
                        schema: {
                            $ref: '#/definitions/User'
                        }
                    },
                    500: {
                        description: 'Internal server error'
                    }
                }
            }
        },
        '/users/updateUser/{id}': {
            put: {
                tags: ['User'],
                summary: 'Update user by id',
                parameters: [
                    {
                        name: 'id',
                        in: 'path',
                        required: true,
                        type: 'string'
                    },
                    {
                        name: 'user',
                        in: 'body',
                        required: true,
                        schema: {
                            $ref: '#/definitions/User'
                        }
                    }
                ],
                responses: {
                    201: {
                        description: 'User was updated',
                        schema: {
                            $ref: '#/definitions/User'
                        }
                    },
                    500: {
                        description: 'Internal server error'
                    }
                }
            }
        },
        '/users/deleteUser/{id}': {
            delete: {
                tags: ['User'],
                summary: 'Delete user by id',
                parameters: [
                    {
                        name: 'id',
                        in: 'path',
                        required: true,
                        type: 'string'
                    }
                ],
                responses: {
                    201: {
                        description: 'User was deleted',
                        schema: {
                            $ref: '#/definitions/User'
                        }
                    },
                    500: {
                        description: 'Internal server error'
                    }
                }
            }
        }
    },
    definitions: {
        Employee: {
            type: 'object',
            properties: {
                id: {
                    type: 'string'
                },
                name: {
                    type: 'string'
                },
                email: {
                    type: 'string'
                },
                phone: {
                    type: 'string'
                }
            }
        },
        User: {
            type: 'object',
            properties: {
                id: {
                    type: 'string'
                },
                name: {
                    type: 'string'
                },
                email: {
                    type: 'string'
                },
                phone: {
                    type: 'string'
                }
            }
        }
    }
})