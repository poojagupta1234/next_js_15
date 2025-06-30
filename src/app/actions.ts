'use server';

export async function handleLogin(formData: FormData) {

  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  // your server logic
    try {
      // Send POST request to the login API
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/loginjwtauth`, {
        method: 'POST',
        body: JSON.stringify({ email: email, password: password }),
      });

      // Parse the JSON response
      const data = await res.json();
    
      return data;
    
    } catch (error) {
     console.error('Error during login:', error);
    }
}