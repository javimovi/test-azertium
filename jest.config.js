module.exports = {
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    transform: {
        "^.+\\.jsx?$": "babel-jest",
        "^.+\\.vue$": "vue-jest",
        '^.+\\.tsx?$': 'ts-jest'
    },
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/src/$1"
    }
    
  };