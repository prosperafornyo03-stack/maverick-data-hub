from http.server import SimpleHTTPRequestHandler, HTTPServer
import json

class Handler(SimpleHTTPRequestHandler):

    def do_POST(self):

        if self.path == "/order":

            length = int(self.headers["Content-Length"])
            data = self.rfile.read(length)

            order = json.loads(data)

            try:
                with open("orders.json","r") as file:
                    orders = json.load(file)
            except:
                orders = []

            orders.append(order)

            with open("orders.json","w") as file:
                json.dump(orders,file,indent=2)

            self.send_response(200)
            self.end_headers()
            self.wfile.write(b"Order Saved")

        else:
            self.send_error(404)


server = HTTPServer(("0.0.0.0",8000), Handler)

print("Maverick Data Hub Server Running...")

server.serve_forever()
