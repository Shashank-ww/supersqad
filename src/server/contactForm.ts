// server/contactForm.ts

export const sendContactForm = async (data: any) => {
    const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Oops! We are checking what went wrong!');
    }

    return await response.json();
};
