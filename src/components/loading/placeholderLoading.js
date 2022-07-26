import { Margin, ProductCard, TweetCard } from "../../styledComponents/styles";

export function Box({ children }) {
  return (
    <> <TweetCard>
      <p className="w-100">{children}</p>
      <p>{children}</p>
    </TweetCard>
      <Margin />
    </>

  );
}

export function Text({ children, width }) {
  return (
    <div className="mt-3">
      <p style={{ width: width }} className="m-auto">
        {children}
      </p>
    </div>
  );
}


export function SearchPlaceholder({ children }) {
  return <div style={{ width: "30%" }} className="form-control m-auto">{children}</div>
}

export function ProductPlaceholder({children}){
return <ProductCard>{children}</ProductCard>
}