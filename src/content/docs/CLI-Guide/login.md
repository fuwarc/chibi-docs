---
title: Login
lang: en-US
---
# The `login` Command

The `login` command is used to authenticate Chibi with AniList. When executed, it guides you through the authentication process. Let’s walk through the steps.

## How to Use the `login` Command

Invoke the `login` command by running the following:

```shell
$ chibi login
# Open the below link in browser to login with anilist: 

# ╭──────────────────────────────────────────────────────────────────────────────╮
# │ https://anilist.co/api/v2/oauth/authorize?client_id=4593&response_type=token │
# ╰──────────────────────────────────────────────────────────────────────────────╯

# ┃ Paste your token here:                                                          
# ┃                                                                                 
# ┃                                                                                 
```

This will display a URL. You can copy and paste this URL into your browser, or simply `Ctrl + Click` the link to open it directly.

## Obtaining the Access Token

After opening the link in your browser, log in to your AniList account. Once logged in, you will be redirected to a page displaying an access token:

![](https://i.imgur.com/00ZR1CL.png)

Copy this access token and paste it into your terminal when prompted to `Enter code`. Upon successful login, you’ll see the following message:

```shell
# Login Successful
```

## Additional Information

Once logged in, you gain access to all the features of Chibi. Your access token, along with your username and user ID, is stored in the configuration directory specific to your operating system:

- Windows: `%AppData%\chibi\token.json`
- Unix-like Systems: `/home/.config/chibi/token.json`
