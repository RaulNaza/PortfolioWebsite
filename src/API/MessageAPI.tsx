const MESSAGE_URL = 'https://retoolapi.dev/tWBLZG/message';

class MessageAPI {
    async post (object: object) {
        try {
            const  resp = await fetch(MESSAGE_URL, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(object)
            });

            return resp;
        } catch (error) {
            console.log(error, 'Failed to Post to RestAPI')
        }
    }
};

export const messageAPI = new MessageAPI();