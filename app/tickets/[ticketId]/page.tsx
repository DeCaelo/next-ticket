const TicketPage = ({ params }: Readonly<{ params: { ticketId: string } }>) => {
  return <h2>Ticket Page {params.ticketId}</h2>;
};

export default TicketPage;
