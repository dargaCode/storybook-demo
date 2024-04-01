export default function LoginForm() {
  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    console.log(event.target.elements);
  }

  return (
    <div>
      <h1>Log in!</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="input-email">
            Email
            <input type="email" data-testid="input-email" name="input-email" />
          </label>
        </div>
        <div>
          <label htmlFor="input-password">Password</label>

          <input
            type="password"
            data-testid="input-password"
            name="input-password"
          />
        </div>
        <button type="submit" data-testid="button-submit">
          submit
        </button>
      </form>
    </div>
  );
}
