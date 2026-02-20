export default function AdminPage() {
  return (
    <div className="container py-20">
      <h1 className="text-4xl font-bold">Admin Panel</h1>
      <p className="text-lg text-foreground/70 mt-4">
        This is the admin panel. Once authentication is set up, only admins will be able to see this page.
      </p>
      <p className="text-lg text-foreground/70 mt-2">
        Here you will be able to manage hosting plans, offers, and other site content.
      </p>
    </div>
  );
}
