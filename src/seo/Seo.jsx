import { Helmet, HelmetProvider } from "react-helmet-async";

const Seo = ({ title, description, keywords }) => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{title}</title>
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Helmet>
    </HelmetProvider>
  );
};

export default Seo;
