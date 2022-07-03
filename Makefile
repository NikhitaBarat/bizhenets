

server_env:
	@source .venv/Scripts/activate

run_server:
	@cd server; python manage.py runserver;