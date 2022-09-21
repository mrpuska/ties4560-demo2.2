import userService from './user-service'

export default new class FileService {

    listFiles(): Promise<any> {
        let uri = 'https://api.dropboxapi.com/2/files/list_folder';

        let params = new URLSearchParams();
        params.set('authorization', 'Bearer ' + userService.authData.access_token)

        return fetch(uri + "?" + params.toString(), {
            method: 'POST',
            body: JSON.stringify({path: ''}),
            headers: new Headers(
                {
                    'Content-Type': 'text/plain; charset=dropbox-cors-hack'
                })
        }).then(res => {
            return res.json().then(json => {
                return json;
            })
        })
    }

    download(filename: string): Promise<any> {
        let uri = 'https://content.dropboxapi.com/2/files/download';

        let params = new URLSearchParams();
        params.set('authorization', 'Bearer ' + userService.authData.access_token)

        return fetch(uri + "?" + params.toString(), {
            method: 'POST',
            body: JSON.stringify({path: '/' + filename}),
            headers: new Headers(
                {
                    'Content-Type': 'text/plain; charset=dropbox-cors-hack'
                })
        }).then(res => {
            return res.blob().then(blob => {
                return blob;
            })
        })
    }

}