'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 text-gray-900 px-6 py-10">
      <header className="max-w-5xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-bold mb-4 tracking-tight text-[#0F172A]">Alerion Ventures</h1>
        <p className="text-xl text-gray-600">Empowering the next generation of clinical innovators. From idea to impact.</p>
      </header>

      <section className="max-w-5xl mx-auto grid gap-10 md:grid-cols-3">
        <Card className="rounded-2xl shadow-xl p-6 bg-white">
          <CardContent>
            <h2 className="text-2xl font-semibold mb-2">Clinical Validation Engine</h2>
            <p className="text-gray-700">A structured platform for de-risking healthcare innovations through clinical feedback, observational studies, and early usability testing.</p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-xl p-6 bg-white">
          <CardContent>
            <h2 className="text-2xl font-semibold mb-2">Venture Studio</h2>
            <p className="text-gray-700">We co-build startups with student founders, clinicians, and engineers, providing hands-on support in exchange for aligned equity.</p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-xl p-6 bg-white">
          <CardContent>
            <h2 className="text-2xl font-semibold mb-2">AxisMED Integration</h2>
            <p className="text-gray-700">Our strategic relationship with UIUC’s pre-incubator unlocks top-tier medical and engineering student deal flow while maintaining full independence.</p>
          </CardContent>
        </Card>
      </section>

      <section className

git add .
git commit -m "Added Alerion Ventures homepage"
git push

cd ~/Downloads/alerion-site

cat > src/app/page.tsx << 'EOF'
'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 text-gray-900 px-6 py-10">
      <header className="max-w-5xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-bold mb-4 tracking-tight text-[#0F172A]">Alerion Ventures</h1>
        <p className="text-xl text-gray-600">Empowering the next generation of clinical innovators. From idea to impact.</p>
      </header>

      <section className="max-w-5xl mx-auto grid gap-10 md:grid-cols-3">
        <Card className="rounded-2xl shadow-xl p-6 bg-white">
          <CardContent>
            <h2 className="text-2xl font-semibold mb-2">Clinical Validation Engine</h2>
            <p className="text-gray-700">A structured platform for de-risking healthcare innovations through clinical feedback, observational studies, and early usability testing.</p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-xl p-6 bg-white">
          <CardContent>
            <h2 className="text-2xl font-semibold mb-2">Venture Studio</h2>
            <p className="text-gray-700">We co-build startups with student founders, clinicians, and engineers, providing hands-on support in exchange for aligned equity.</p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-xl p-6 bg-white">
          <CardContent>
            <h2 className="text-2xl font-semibold mb-2">AxisMED Integration</h2>
            <p className="text-gray-700">Our strategic relationship with UIUC’s pre-incubator unlocks top-tier medical and engineering student deal flow while maintaining full independence.</p>
          </CardContent>
        </Card>
      </section>

      <section className="max-w-4xl mx-auto mt-20 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl font-bold mb-4">Ready to Build With Us?</h2>
          <p className="text-gray-600 mb-6">Whether you're a student innovator, clinical advisor, or partner, we’d love to hear from you.</p>
          <a href="mailto:contact@alerionventures.com">
            <Button className="text-lg px-6 py-2 rounded-2xl shadow-lg bg-blue-600 hover:bg-blue-700 text-white">Contact Us</Button>
          </a>
        </motion.div>
      </section>

      <footer className="mt-24 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Alerion Ventures. All rights reserved.
      </footer>
    </div>
  );
}
