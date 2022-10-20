import * as React from 'react';
import BaseUrl from './BaseUrl';

export default class ApiCall extends React.Component {
    static async ApiMethod(Url, Method, data) {
        let CompleteUrl = BaseUrl.base + Url
        var HeaderToken = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
        // console.log("HeaderToken  : - ", HeaderToken)
        // console.log("Url  : - ", CompleteUrl)
        // console.log("Method  : - ", Method)
        // console.log("apiData  : - ", data)
        return fetch(CompleteUrl, {
            body: data,
            method: Method,
            headers: HeaderToken,
        }).then((response) => {
            return response.json()
        }).then((responseJson) => {
            console.log("responseJson  : - ", responseJson)
            return responseJson;
        })
            .catch((error) => {
                console.log("---------------Api error: " + error)
                return { "message": error, "status": "false" }
            });

    }
}