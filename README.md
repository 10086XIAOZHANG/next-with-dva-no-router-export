### in dev process,then run:
  npm run dev
### in product process. Then run:
   npm run finishExport
### nginx config:
 
...

server {
listen 80;
server_name www.xxxx.com;
root /Users/jimck/ReactProject/with-static-export/out;
index index.html;
}

...
