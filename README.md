# mudform-editor-using-freon
MuDForM editor using the Freon framework for projectional editing on the web.

More info on Freon: https://www.freon4dsl.dev and https://github.com/freon4dsl

More info on MuDForM: https://github.com/robertdeckers/MuDForM

##  installation

install node v22 as per https://nodejs.org/en/download

```bash
# Download and install nvm:
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash

# in lieu of restarting the shell
\. "$HOME/.nvm/nvm.sh"

# Download and install Node.js:
nvm install 22

# Verify the Node.js version:
node -v # Should print "v22.14.0".
nvm current # Should print "v22.14.0".

# Verify npm version:
npm -v # Should print "10.9.2".
```

## setting proxy for npm

```bash
npm config set proxy http://proxy.oce.net:81
npm config set https-proxy http://proxy.oce.net:81

# verify with
nvm config list
```

## install node modules

NB perform all commands below with `/MuDForM` as current folder

```bash
npm install
```
note that install does not seem to do a lot for one minute.
I suppose it is quietly computing dependencies.
after a minute of so you should see download activity.

## run the language


in one bash terminal:
```bash
npm run build
```
repeat this every time after you made changes to the language definition.

in a second bash terminal:
```bash
npm run server
```
this process keeps running, it serves the files bundled by the dev command (below)

in a third bash terminal:
```bash
npm run prepare-app   # Generates the runtime CSS files. A single run will suffice.
npm run dev           # Builds and serves the page with the Freon editor.
```
open http://localhost:8080

the dev command will watch the files from the build command.
after you see the dev command re-create the files to be served,
refresh the page in the browser.


for more details see https://www.freon4dsl.dev/Documentation/Overview/Getting_Started/