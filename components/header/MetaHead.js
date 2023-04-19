import Head from 'next/head';

const MetaHead = ({title, description, iconSrc}) => {
  return (
    <Head>
      <title>{title ? title : "Olwen lifesciences"}</title>
      <meta name="description" content={description ? description : "Olwen lifesciences pharma products"} />
      <link rel="icon" href={iconSrc ? iconSrc : "/images/logos/tabs-icon.png"} />
    </Head>
  );
};

export default MetaHead;
