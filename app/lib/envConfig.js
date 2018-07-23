'use Strict';

let project = 'theloungeoncampus';


function baseConfig(){
    let baseEnvConfig = {
        thisPort: 3214,
        applicationName: project,
        setupTestData: false,
        log: {
            level: 'info',
            projectName: project,
        },
        mongodb: {
            // This is controlled by admin changes
            url: "mongodb://"
        }
    };

    return baseEnvConfig
}


//These options switch between Local and Prod environments. More can be added for integration or CI if we use them
function createLocalConfig(){
    let scopedConfig = baseConfig();

    scopedConfig.environment = 'local';
    scopedConfig.log.level = 'debug';
    scopedConfig.mongodb.url = 'mongodb://' + process.env.MONGODB_PORT_27017_TCP_ADDR + ':' +
        process.env.MONGODB_PORT_27017_TCP_PORT + '/theloungeoncampus';

    return scopedConfig;
}

function createProductionConfig(){
    let scopedConfig = baseConfig();

    scopedConfig.environment = 'Production';

    return scopedConfig;
}

let env = process.env.NODE_ENV,
    envConfig;

switch( env ){
    case 'local':
        envConfig = createLocalConfig();
        break;
    case 'PRD':
        envConfig = createProductionConfig();
        break;
    default:
        throw new Error('Unsupported environment' + env);
}

module.exports = envConfig;