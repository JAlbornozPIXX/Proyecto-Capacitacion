import "reflect-metadata";
import { createServer } from 'http'
import { createYoga } from 'graphql-yoga'
import { buildSchema } from "type-graphql"; 
import { resolvers} from "./schema"
import { createContext } from "./context";


 
async function main() {
  const schema = await buildSchema({
      resolvers,
    });
      
      // ... Server
  const yoga = createYoga({ 
    schema,
    context: createContext
  })
  
  const server = createServer(yoga)
  server.listen(4000, () => {
    console.info('Server is running on http://localhost:4000/graphql')
  })
}

main()


