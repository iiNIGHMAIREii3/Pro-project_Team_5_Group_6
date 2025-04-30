import os
import sqlite3
import hashlib
from typing import Optional, Tuple

class Database:
    def __init__(self, db_name: str = "users.db"):
        # تأكد من وجود مجلد data
        os.makedirs("data", exist_ok=True)
        self.db_name = os.path.join("data", db_name)
        self.init_database()

    def init_database(self):
        """Create the users table if it doesn't exist."""
        with sqlite3.connect(self.db_name) as conn:
            cursor = conn.cursor()
            cursor.execute('''
                CREATE TABLE IF NOT EXISTS users (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    username TEXT UNIQUE NOT NULL,
                    password TEXT NOT NULL,
                    email TEXT UNIQUE NOT NULL,
                    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                )
            ''')
            conn.commit()

    def _hash_password(self, password: str) -> str:
        return hashlib.sha256(password.encode()).hexdigest()

    def signup(self, username: str, password: str, email: str) -> Tuple[bool, str]:
        try:
            with sqlite3.connect(self.db_name) as conn:
                cursor = conn.cursor()
                hashed_password = self._hash_password(password)
                cursor.execute(
                    "INSERT INTO users (username, password, email) VALUES (?, ?, ?)",
                    (username, hashed_password, email)
                )
                conn.commit()
                return True, "User registered successfully!"
        except sqlite3.IntegrityError as e:
            if "username" in str(e):
                return False, "Username already exists!"
            elif "email" in str(e):
                return False, "Email already registered!"
            return False, "Registration failed!"
        except Exception as e:
            return False, f"An error occurred: {str(e)}"

    def login(self, username: str, password: str) -> Tuple[bool, str]:
        try:
            with sqlite3.connect(self.db_name) as conn:
                cursor = conn.cursor()
                hashed_password = self._hash_password(password)
                cursor.execute(
                    "SELECT * FROM users WHERE username = ? AND password = ?",
                    (username, hashed_password)
                )
                user = cursor.fetchone()
                if user:
                    return True, "Login successful!"
                return False, "Invalid username or password!"
        except Exception as e:
            return False, f"An error occurred: {str(e)}"

    def get_user_by_username(self, username: str) -> Optional[tuple]:
        try:
            with sqlite3.connect(self.db_name) as conn:
                cursor = conn.cursor()
                cursor.execute("SELECT id, username, email, created_at FROM users WHERE username = ?", (username,))
                return cursor.fetchone()
        except Exception:
            return None
