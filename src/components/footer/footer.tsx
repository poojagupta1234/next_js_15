export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-center py-6 mt-10">
      <p className="text-sm text-gray-600 dark:text-gray-400">
        &copy; {new Date().getFullYear()} MyApp. All rights reserved.
      </p>
    </footer>
  );
}