# NingmengAPI
Ningmeng API for Ayaka Networks

## Configuration

## Config File

Set your port at the port your nginx server will reverse proxy it.

### Nginx Server

```
server {
        listen 443 ssl http2;
        # listen [::]:443 ssl;

        server_name api.ayaka.moe;

        ssl on;
        ssl_certificate /etc/letsencrypt/live/diary.ayaka.moe-0003/fullchain.pem;
        ssl_certificate_key /etc/letsencrypt/live/diary.ayaka.moe-0003/privkey.pem;
        ssl_prefer_server_ciphers on;
        ssl_ciphers "EECDH+ECDSA+AESGCM EECDH+aRSA+AESGCM EECDH+ECDSA+SHA384 EECDH+ECDSA+SHA256 EECDH+aRSA+SHA384 EECDH+aRSA+SHA256 EECDH+aRSA+RC4 EECDH EDH+aRSA !aNULL !eNULL !LOW !3DES !MD5 !EXP !PSK !SRP !DSS !RC4";
        keepalive_timeout 70;
        ssl_session_cache shared:SSL:10m;
        ssl_session_timeout 10m;

        add_header Strict-Transport-Security max-age=63072000;
        # add_header X-Frame-Options DENY;
        add_header X-Content-Type-Options nosniff;


        location / {
                proxy_pass http://127.0.0.1:4000;
        }

}
```