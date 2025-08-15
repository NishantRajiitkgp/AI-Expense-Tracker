import Image from "next/image";
import { checkUser } from "@/lib/checkUser";
import Guest from "@/components/Guest";

export default async function Home() {
  const user = await checkUser();
  if (!user) {
    return <Guest />;
  }
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
          ExpenseTracker AI
        </h1>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div 
            className="p-6 rounded-xl shadow-lg border"
            style={{
              backgroundColor: 'var(--card-bg)',
              borderColor: 'var(--card-border)'
            }}
          >
            <h2 
              className="text-2xl font-semibold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              Smart Financial Management
            </h2>
            <p 
              className="mb-4"
              style={{ color: 'var(--text-secondary)' }}
            >
              AI-powered expense tracking with intelligent insights and smart categorization.
            </p>
            <div 
              className="p-4 rounded-lg"
              style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)' }}
            >
              <p 
                className="text-sm"
                style={{ color: 'var(--accent)' }}
              >
                💡 Try toggling the theme using the button in the navbar!
              </p>
            </div>
          </div>
          
          <div 
            className="p-6 rounded-xl shadow-lg border"
            style={{
              backgroundColor: 'var(--card-bg)',
              borderColor: 'var(--card-border)'
            }}
          >
            <h2 
              className="text-2xl font-semibold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              Features
            </h2>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span style={{ color: 'var(--accent)' }}>✓</span>
                <span style={{ color: 'var(--text-secondary)' }}>AI-powered categorization</span>
              </li>
              <li className="flex items-center gap-2">
                <span style={{ color: 'var(--accent)' }}>✓</span>
                <span style={{ color: 'var(--text-secondary)' }}>Smart insights</span>
              </li>
              <li className="flex items-center gap-2">
                <span style={{ color: 'var(--accent)' }}>✓</span>
                <span style={{ color: 'var(--text-secondary)' }}>Dark/Light theme</span>
              </li>
              <li className="flex items-center gap-2">
                <span style={{ color: 'var(--accent)' }}>✓</span>
                <span style={{ color: 'var(--text-secondary)' }}>Responsive design</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
