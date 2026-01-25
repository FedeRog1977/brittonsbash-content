# BrittonsBash Content

HTML web application, and static content for BrittonsBash Web.

## Web Server Stack

- Domain: [Epik](https://www.epik.com/)
- DNS navigation to server: Epik
- Server:
  - Host: [Vultr](https://www.vultr.com/) VPS
  - Operating System: Debian
  - Instance Name: `brittonsbash`
- Web server: NGINX
- HTTPS: Certbot
- Backend:
  - Host: [MongoDB Atlas Cloud](https://account.mongodb.com/)
  - Database: MongoDB document database
- Service: Node.js REST API services
- Frontend: Next.js, React, HTML applications
- Deployment:
  - Next.js: Docker

### Access

Access the server from the command line, using SSH.

```sh
ssh root@lewisbritton.com
```

Enter your password, listed by your server provider. If you carry out the following steps, this is the only time you will have to do this.

### SSH-Only Access

This section details how to restrict access to the server to only users with a valid SSH key, rather than a password.

Navigate to the SSH config:

```sh
cd /etc/ssh/sshd_config
```

...

### Update Packages

Run the following commands to ensure the packages on your Debian instance are up to date:

```sh
apt update

apt upgrade
```

### Clean-Up `.bashrc`

Navigate to your `.bashrc` and uncomment anything from the generated template which you find necessary:

```sh
vim ~/.bashrc
```

Enable `vi` mode for your shell:

```sh
set -o vi
```

Source your `.bashrc`, so it is active:

```sh
source ~/.bashrc
```

### Install Packages

Install NGINX, for your web server:

```sh
apt install nginx
```

Install Certbot and `python-certbot-nginx`, for HTTPS:

```sh
apt install certbot

apt install python3-certbot-nginx
```

Install `rsync`, to sync your Git repos with the server:

```sh
apt install rsync
```

### NGINX

This section assumes that your firewall settings are configured correctly for all SSH, HTTP, and HTTPS.

- Sites available: `/etc/nginx/sites-available/example`
- Sites enabled: `/etc/nginx/sites-enabled/example`
- Files for the web server: `/var/www/example`
- Helpful: https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-ubuntu-20-04

...

Obtain SSL certificate (enable HTTPS):

```sh
certbot --nginx -d example.com -d www.example.com
```

- Certificate and chain: `/etc/letsencrypt/live/example.com/fullchain.pem`
- Key saved at: `/etc/letsencrypt/live/example.com/privkey.pem`
- My personal key expires on: 2025-09-21
- Renew keys: `certbot renew`

Note from the `certbot` output:

```sh
To obtain a new or tweaked version of this certificate in the future, simply run certbot again with the "certonly" option. To non-interactively renew *all* of your certificates, run "certbot renew"
```

See server logs:

```sh
systemctl status nginx.service
```

Reload NGINX:

```sh
sudo systemctl reload nginx
```

Restart NGINX:

```sh
sudo systemctl restart nginx
```

Additional, add CORS headers to NGINX `sites-available/example` and `sites-enabled/example`, to enable fetching from this domain:

```sh
if ($request_method = 'OPTIONS' ) {
  add_header 'Access-Control-Allow-Origin'  '*';
  add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS, HEAD';
  add_header 'Access-Control-Allow-Headers' 'Authorization, Origin, X-Requested-With, Content-Type, Accept';

  return 200;
}

if ($request_method ~* '(GET|POST)') {
  add_header 'Access-Control-Allow-Origin' '*';
}
```

You may also use the same config for `POST`, etc.

Also see: https://serverfault.com/questions/162429/how-do-i-add-access-control-allow-origin-in-nginx.

And see (I have currently not resolved this issue): https://stackoverflow.com/questions/56138678/neterr-cert-common-name-invalid-error-message.

### Update Website

From the directory, or repo, etc., you wish to copy your code, run:

```sh
rsync -vrP --delete-after /Users/digital/example/ root@lewisbritton.com:/var/www/example
```

For example:

```sh
rsync -vrP --delete-after /Users/digital/brittonsbash-content/ root@lewisbritton.com:/var/www/lewisbritton
```
