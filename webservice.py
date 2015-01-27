from flask import Flask, session, redirect, url_for, escape, request, jsonify
from flask.ext.pymongo import PyMongo


from pprint import pformat
import sys
import os
import re

app = Flask("download")
mongo = PyMongo(app)

local_repo  = '/home/rgarcia/opendata'
server_repo = '/home/rgarcia/public_html'

############
# anuncios #
############

@app.route('/register', methods=['POST'])
def anuncio_save():
    downloader = request.get_json()
    try:
        downloader.pop('email_repeat')
        path = downloader['path']
        oid = mongo.db.downloaders.save(downloader)

        local_path = os.path.join( local_repo, path )
        server_path = os.path.join( server_repo, str(oid) )


        app.logger.debug(local_path)
        app.logger.debug(server_path)


        os.symlink(local_path, server_path)

        return jsonify({ "oid": str(oid)} )
    except:
        raise
        # return jsonify({ "status": "error",
        #                  "message": pformat(sys.exc_info()[0]) })
 



if __name__ == '__main__':
    app.run(debug=True)
