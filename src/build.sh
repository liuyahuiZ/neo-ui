mkdir -p Boss/Components
cp -a WAP/Components/style Boss/Components/
cp -a WAP/Components/fonts Boss/Components/
babel WAP --out-dir Boss
