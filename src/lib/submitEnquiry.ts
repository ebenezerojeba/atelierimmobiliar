export type Enquiry = {
  name: string
  email: string
  phone: string
  property: string
  message: string
  language: string
}

/**
 * Sends the contact form. Configure `VITE_CONTACT_ENDPOINT` (see .env.example)
 * to post JSON to Formspree, Getform, your CRM or a serverless function.
 * Without an endpoint the submission is simulated so the UI can be reviewed.
 */
export async function submitEnquiry(data: Enquiry): Promise<void> {
  const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT

  if (!endpoint) {
    await new Promise((r) => setTimeout(r, 1400))
    if (import.meta.env.DEV) console.info('[contact] No VITE_CONTACT_ENDPOINT configured — submission simulated.', data)
    return
  }

  const res = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(data),
  })
  if (!res.ok) throw new Error(`Contact endpoint responded with ${res.status}`)
}
