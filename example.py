from database import Database

def main():
    # Initialize the database
    db = Database()
    
    # Example: Sign up a new user
    print("\n=== Testing Sign Up ===")
    success, message = db.signup(
        username="john_doe",
        password="secure_password123",
        email="john@example.com"
    )
    print(f"Sign up result: {message}")

    # Example: Try to sign up with the same username (should fail)
    success, message = db.signup(
        username="john_doe",
        password="different_password",
        email="different@example.com"
    )
    print(f"Duplicate signup attempt: {message}")

    # Example: Login with correct credentials
    print("\n=== Testing Login ===")
    success, message = db.login(
        username="john_doe",
        password="secure_password123"
    )
    print(f"Login attempt: {message}")

    # Example: Login with incorrect password
    success, message = db.login(
        username="john_doe",
        password="wrong_password"
    )
    print(f"Login with wrong password: {message}")

    # Example: Get user information
    print("\n=== User Information ===")
    user_info = db.get_user_by_username("john_doe")
    if user_info:
        user_id, username, email, created_at = user_info
        print(f"User ID: {user_id}")
        print(f"Username: {username}")
        print(f"Email: {email}")
        print(f"Created at: {created_at}")
    else:
        print("User not found!")

if __name__ == "__main__":
    main() 