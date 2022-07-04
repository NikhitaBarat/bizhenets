
server_env:
	@source .venv/Scripts/activate

run_server:
	@cd server; python manage.py runserver;

install:
	npm install; cd client; npm install; cd ..;

dev:
	npm run dev 

