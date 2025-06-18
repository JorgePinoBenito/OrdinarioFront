import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Characters from "../components/Characters.tsx";
import { DataTodos, ResultsTodos } from "../types.ts";

export const handler: Handlers = {
  GET: async (_req: Request, ctx: FreshContext<unknown, ResultsTodos>) => {
    const response = await fetch(
      `https://hp-api.onrender.com/api/characters`,
    );

    if (!response.ok) {
      return new Response("Error fetching data", { status: 500 });
    }

    const results: DataTodos[] = await response.json();

    return ctx.render({ results });
  },
};

const Page = (props: PageProps<ResultsTodos>) => {
  return (
    <div>
      <Characters results={props.data.results} />
    </div>
  );
};

export default Page;
