import { Layout } from "../../components/Layout/Layout";
import { ForgotPassword } from "../../components/User/ForgotPassword";

export default function ForgotPasswordPage() {
  return (
    <Layout title="Forgot Password | staycation.com">
      <main className="max-w-6xl mx-auto pb-8 md:pb-32">
        <ForgotPassword />
      </main>
    </Layout>
  );
}
