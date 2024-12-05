export class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  getProfile() {
    return {
      email: this.email,
    };
  }
}

// const user = new User(1, "Anna", "anna@test.com", "password");
