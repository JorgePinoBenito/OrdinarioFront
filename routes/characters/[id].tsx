import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Character from "../../components/Character.tsx";
import { DataCharacter, ResultsCharacter } from "../../types.ts";

export const handler: Handlers = {
  GET: async (_req: Request, ctx: FreshContext<unknown, ResultsCharacter>) => {
    const id = ctx.params.id;
    const response = await fetch(
      `https://hp-api.onrender.com/api/character/${id}`,
    );

    if (!response.ok) {
      return new Response("Error fetching data", { status: 500 });
    }

    const results: DataCharacter[] = await response.json();

    return ctx.render({ results });
  },
};

const Page = (props: PageProps<ResultsCharacter>) => (
  <div>
    <Character results={props.data.results} />
  </div>
);

export default Page;
