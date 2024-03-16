from http.server import HTTPServer, CGIHTTPRequestHandler
httpd = HTTPServer(('', 5555), CGIHTTPRequestHandler)
httpd.serve_forever()