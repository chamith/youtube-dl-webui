class Config {
    api_host_dev = "localhost:9001";

    getApiHost = () => {
        var protocol = window.location.protocol;

        return protocol + '//' + window.location.host.replace('3000', '5000')
    }

    getEnv = () => {
        return "dev";
    }
}

export default Config;