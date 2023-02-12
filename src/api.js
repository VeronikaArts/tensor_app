class Api {

    /**
     * Метод для работы с АПИ lastfm
     * @param method
     * @param params
     * @returns {Promise<any>}
     */
    async getLastFmApi(method, params = {}){
        try{
            let url = `https://ws.audioscrobbler.com/2.0/?`;
            url +=
                new URLSearchParams(
                    {...params, method, format: 'json', api_key: '0c55ea1d042937e896003a61f773e060'}
                )
            const res = await fetch(
                url,
                {method: 'GET'}
            );

            return res.json();
        }catch (e) {
            console.log(`Ошибка получение информации по методу ${method}`, e)
            throw e
        }
    }
}

export default new Api()