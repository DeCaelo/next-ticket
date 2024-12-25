type PageProps = {
  params: {
    ticketId: string;
  };
};

const TicketPage = ({ params }: PageProps) => {
  return <h2>Ticket Page {params.ticketId}</h2>;
};

export default TicketPage;
