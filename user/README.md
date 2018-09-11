# 用户模块

## 用户注册

`接口描述` : `用户注册接口,返回用户注册的后的状态`

`请求路径` :  `/api/user/register`

`请求方法` :  `POST`

`请求头`: 
```
Content-Type: application/json
```

`请求参数` : 参数类型 `body`
| key        | value           | type  | desc | required | 
|:----------:|:---------:|:-----:| :---------:| :------:|
| username   | 展示      | String | 用户名 | true |
| password   | password |   String | 密码 | true |
| emai   | emai     |    String |  邮箱 | true |

示例:
```json
{
    "username": "username",
    "password": "password",
    "emai": "emai@ss.com"
}
```
`响应数据` : 
```json
{
    "code": "",
    "msg": "",
    "data": {

    }
}
```

## 用户登陆

`接口描述` : `用户登陆接口,返回用户的基本信息和登陆后的 token `

`请求路径` :  `/api/user/login`

`请求方法` :  `POST`

`请求头`: 
```
Content-Type: application/json
```

`请求参数` : 参数类型 `body`
| key        | value           | type  | desc | required | 
|:----------:|:---------:|:-----:|  :---------:| :--------: |
| username   | 展示      | String | 用户名 | true |
| password   | password |   String | 密码 | true |

示例:
```json
{
    "username": "展示",
    "password": "password"
}
```

`响应数据` : 
```json
{
    "code": "",
    "msg": "",
    "data": {
        
    }
}
```

## 用户列表

`接口描述` : `请求用户列表, 用到登陆接口返回的 token 进行认证 `

`请求路径` :  `/api/user/list/:page`

`请求方法` :  `GET`

`请求头`: 
```
Authorization: Bearer  token
```

`请求参数` : 参数类型 `params`
| key        | value           | type  | desc |  required|
|:----------:|:---------:|:-----:|  :---------:|:----: |
| page   | 1      | String | 第几页 |  true |

示例：
```js
/api/user/list/1
```

`响应数据` : 
```json
{
    "code": "",
    "msg": "",
    "data": {
        
    }
}
```

## 查询用户

`接口描述` : `根据用户id查询用户信息 `

`请求路径` :  `/api/user/info?id=123`

`请求方法` :  `GET`

`请求头`: 
```
Authorization: Bearer  token
```

`请求参数` : 参数类型 `query`
| key        | value           | type  | desc |  required|
|:----------:|:---------:|:-----:|  :---------:|:----: |
| id   | 1      | Int | 用户id |  true |

示例：
```js
/api/user/info?id=123
```

`响应数据` : 
```json
{
    "code": "",
    "msg": "",
    "data": {
        
    }
}
```