import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>

      <div className="max-w-2xl mx-auto">
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <Input type="text" id="name" name="name" required className="mt-1" />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <Input type="email" id="email" name="email" required className="mt-1" />
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
              Subject
            </label>
            <Input type="text" id="subject" name="subject" required className="mt-1" />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <Textarea id="message" name="message" rows={5} required className="mt-1" />
          </div>

          <Button type="submit" className="w-full">
            Send Message
          </Button>
        </form>
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">Other Ways to Reach Us</h2>
        <p className="mb-2">Email: abbes@ihstgroup.com
        </p>
        <p className="mb-2">Phone:+216 24225975</p>
        <p>Rue du Lac Turkana, Tunis 1053, Tunis, Tunisia, 1053</p>
      </div>
    </div>
  )
}

