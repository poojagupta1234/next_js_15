

export const metadata = {
  title: 'NextGram',
  description:
    'A sample Next.js app showing dynamic routing with modals as a route.',
};

export default function RootLayout(props: Readonly<{
  children: React.ReactNode;
  model: React.ReactNode;
}>) {
  return (
   
      <div>
        {props.children}
        {props.model}
        <div id="modal-root" />
      </div>
    
  );
}