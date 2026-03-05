const slidesData = [
    {
        title: "Introduction to MCP",
        content: `
            <p class="lead"><strong>Model Context Protocol (MCP)</strong> is an <mark class="highlight">open protocol that standardizes how AI applications access external tools</mark> and data sources.</p>
            <p>By connecting Large Language Models (LLMs) to local development tools, databases, APIs, and other resources, MCP extends their capabilities far beyond their base training.</p>
        `
    },
    {
        title: "MCP vs. Traditional APIs",
        content: `
            <p>In the past, every AI model had to be custom-wired to every single tool or dataset.</p>
            <img class="slide-image" src="images/01-mcp_vs_api.png" alt="MCP vs API comparison diagram">
            <p class="image-caption">Notice how MCP solves the integration problem, acting as a universal adapter.</p>
        `
    },
    {
        title: "General Architecture",
        content: `
            <p>MCP standardizes the connection. You expose resources and tools via an <strong>MCP Server</strong>, and any <strong>MCP Client</strong> can immediately understand and use them.</p>
            <img class="slide-image" src="images/02-MCP_general_architecture-1.png" alt="MCP General Architecture 1">
        `
    },
    {
        title: "General Architecture",
        content: `
            <p>MCP standardizes the connection. You expose resources and tools via an <strong>MCP Server</strong>, and any <strong>MCP Client</strong> can immediately understand and use them.</p>
            
            <img class="slide-image" src="images/03-MCP_general_architecture-2.png" alt="MCP Gateway Architecture">
            
        `
    },
    {
        title: "The 'USB-C' for AI",
        content: `
            <p>Think of the Model Context Protocol as <mark class="highlight">the universal 'USB-C' cord for Artificial Intelligence</mark>. One standard plugin for everything.</p>
            <img class="slide-image" src="images/04-MCP_general_architecture-3-usb.png" alt="MCP USB Analogy">
        `
    },
    {
        title: "Enter the Docker MCP Toolkit",
        content: `
            <p>The <strong>Docker MCP Toolkit</strong> is a management interface integrated into Docker Desktop that lets you <mark class="highlight">set up, manage, and run containerized MCP servers</mark> in catalogs and profiles (not yet enabled) and connect them to AI agents.</p>
            <img class="slide-image" src="images/07-docker_mcp_toolkit-dockerdesktop-3.png" alt="Docker Desktop MCP Toolkit catalog view">
            <p class="image-caption">The Docker MCP Toolkit ships 300+ verified servers accessible directly from Docker Desktop.</p>
        `
    },
    {
        title: "Clients, Servers & the Toolkit",
        content: `
            <p>MCP introduces two core building blocks:</p>
            <ul>
                <li><strong>MCP Clients</strong> — AI applications (like VS Code, Claude, or your own agent) that want to use tools and data.</li>
                <li><strong>MCP Servers</strong> — lightweight processes that expose tools, resources, or data to clients.</li>
            </ul>
            <p>The <strong>Docker MCP Toolkit</strong> goes a step further: <mark class="highlight">it organizes MCP servers into <strong>catalogs</strong> and acts as a <strong>Gateway</strong> so that clients don't need to know about each server individually</mark> — they simply connect to the Toolkit and get access to everything.</p>
        `
    },
    {
        title: "The Problem: Without a Gateway",
        content: `
            <p><mark class="highlight">Without the MCP Gateway, every AI client must be individually configured to reach every server</mark> — each with its own credentials, lifecycle, and routing logic. This quickly becomes unmanageable.</p>
            <img class="slide-image" src="images/05-docker_mcp_toolkit-part-1.png" alt="Without MCP Gateway: clients connecting directly to many servers">
            <p class="image-caption">Each client needs to know about every server. Credentials are scattered. Configuration is duplicated.</p>
        `
    },
    {
        title: "The Solution: The Docker MCP Toolkit",
        content: `
            <p>The <strong>Docker MCP Toolkit</strong> introduces <mark class="highlight">a centralized <strong>MCP Gateway</strong> that sits between all clients and all servers</mark>. You configure once — the Gateway handles everything else.</p>
            <img class="slide-image" src="images/05-docker_mcp_toolkit-part-2.png" alt="With MCP Gateway: centralized proxy inside MCP Toolkit">
            <p class="image-caption">One Gateway. One place for credentials, routing, and server lifecycle management.</p>
        `
    },
    {
        title: "The MCP Gateway",
        content: `
            <p><mark class="highlight">The <strong>MCP Gateway</strong> is Docker's open source solution for orchestrating MCP servers</mark>. It acts as a centralized proxy between clients and servers, managing configuration, credentials, and access control.</p>
            <p>Without a Gateway, you configure your AI applications individually — for every server, on every client. With the MCP Gateway, your apps simply connect to the Gateway once. The Gateway then handles server lifecycle, routing, and authentication across all servers automatically.</p>
            <img class="slide-image" src="images/05-docker_mcp_toolkit-part-2.png" alt="MCP Gateway as centralized proxy inside MCP Toolkit">
            <p class="image-caption">The MCP Gateway sits at the center — clients connect to it once, and it routes to all servers.</p>
        `
    },
    {
        title: "The Catalog",
        content: `
            <p><strong>Catalogs</strong> are curated collections of MCP servers. <mark class="highlight">The Docker MCP Catalog</mark> provides <strong>300+ verified servers</strong> packaged as container images — with versioning, provenance, and security updates built in.</p>
            <p>Organizations can also <mark class="highlight">create <em>custom catalogs</em></mark> with approved servers for their teams.</p> <p><mark class="highlight">Think of the catalog as a <strong>library of tools</strong>.</mark></p>
            <img class="slide-image" src="images/05-docker_mcp_toolkit-part-3-catalog.png" alt="MCP Toolkit with Catalog highlighted">
            <p class="image-caption">The Catalog lives inside the MCP Toolkit alongside the Gateway and handles server discovery and management.</p>
        `
    },
    {
        title: "Wizard 1: Use the Docker Catalog",
        content: `
            <div style="text-align:center; padding: 4rem 2rem;">
                <p style="font-size:0.9rem; letter-spacing:0.15em; text-transform:uppercase; color:#666; margin-bottom:0.5rem;">Part 1</p>
                <h2 style="font-size:3rem; margin-bottom:1.5rem; border-bottom: 3px solid #111; display:inline-block; padding-bottom:0.5rem;">Wizard 1</h2>
                <p style="font-size:1.3rem; max-width:600px; margin:0 auto;">In this wizard you will connect the <strong>GitHub Official MCP server</strong> from the Docker Catalog to VS Code — no custom code required. You'll install Docker Desktop, add the server, wire up the MCP Gateway, and confirm that your AI agent can query GitHub on your behalf.</p>
            </div>
        `
    },
    {
        title: "Wizard 1: Using the Docker Catalog",
        content: `
            <p>Let's add the <strong>GitHub Official</strong> MCP server from the Docker Catalog to our toolkit.</p>
            <ol>
                <li>Install Docker Desktop: <a href="https://docs.docker.com/get-started/introduction/get-docker-desktop/" target="_blank">docs.docker.com/get-started/introduction/get-docker-desktop</a></li>
                <li>Go to the <strong>MCP Toolkit</strong> in Docker Desktop and search the Catalog for "GitHub Official".</li>
                <li>Click <strong>Add Server</strong>.</li>
                <li>Create a fine-grained Personal Access Token on GitHub (<a href="https://github.com/settings/personal-access-tokens" target="_blank">https://github.com/settings/personal-access-tokens</a>) and paste it in the server configuration.</li>
            </ol>
        `
    },
    {
        title: "Wizard 1: Connect your Client",
        content: `
            <p>Now let's connect Visual Studio Code to your new Gateway.</p>
            <ol>
                <li>In Docker Desktop -> MCP Toolkit -> Connect Client -> VS Code -> <strong>Copy the docker run command</strong>.</li>
                <li>In VS Code, press <code>Cmd-Shift-P</code> (Mac) or <code>Ctrl-Shift-P</code> (Windows).</li>
                <li>Search for <strong>"MCP: Add MCP Gateway"</strong> and choose "stdio".</li>
                <li>Paste the command and hit Enter!</li>
            </ol>
            <div class="do-it">
                <h3>Verify your config</h3>
                <p>Check your <code>.vscode/mcp.json</code>. It should look somewhat like this:</p>
                <pre><code>{
    "servers": {
        "my-mcp-gateway-docker": {
            "type": "stdio",
            "command": "docker",
            "args": ["mcp", "gateway", "run"]
        }
    }
}</code><button class="copy-btn">Copy</button></pre>
            </div>
        `
    },
    {
        title: "Wizard 1: Gateway Run Options",
        content: `
            <p>The <code>docker mcp gateway run</code> command accepts optional flags that give you more control over how the gateway behaves. Two useful ones are <code>--long-lived</code> and <code>--catalog</code>.</p>
            <table style="width:100%; border-collapse:collapse; margin-bottom:1.5rem;">
                <thead>
                    <tr style="border-bottom:2px solid #111;">
                        <th style="text-align:left; padding:0.5rem 1rem 0.5rem 0;">Flag</th>
                        <th style="text-align:left; padding:0.5rem 0;">Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom:1px solid #ddd;">
                        <td style="padding:0.6rem 1rem 0.6rem 0; white-space:nowrap;"><code>--long-lived</code></td>
                        <td style="padding:0.6rem 0;">Containers are long-lived and will <mark class="highlight">not be removed until the gateway is stopped</mark>. Useful for stateful servers that need to maintain state between calls.</td>
                    </tr>
                    <tr>
                        <td style="padding:0.6rem 1rem 0.6rem 0; white-space:nowrap;"><code>--catalog</code></td>
                        <td style="padding:0.6rem 0;">Paths to Docker catalogs (absolute or relative to <code>~/.docker/mcp/catalogs/</code>). <mark class="highlight">Only servers from the specified catalogs will be available</mark> — useful for restricting which servers an agent can reach.</td>
                    </tr>
                </tbody>
            </table>
            <div class="do-it">
                <h3>Example: using a custom catalog with long-lived containers</h3>
                <p>Update your <code>.vscode/mcp.json</code> to pass extra args to the gateway:</p>
                <pre><code>{
    "servers": {
        "my-mcp-gateway-docker": {
            "type": "stdio",
            "command": "docker",
            "args": [
                "mcp",
                "gateway",
                "run",
                "--long-lived",
                "--catalog",
                "dim-student-catalog"
            ]
        }
    },
    "inputs": []
}</code><button class="copy-btn">Copy</button></pre>
                <p>With this config the gateway will only load servers from <strong>dim-student-catalog</strong> and keep all containers running until the gateway is stopped.</p>
            </div>
            <p>For the full list of available flags, see the official docs: <a href="https://docs.docker.com/reference/cli/docker/mcp/gateway/run/" target="_blank">docs.docker.com/reference/cli/docker/mcp/gateway/run</a></p>
        `
    },
    {
        title: "Wizard 1: Try it out!",
        content: `
            <p>Everything is connected. Let's verify the setup is working and trigger the GitHub MCP server from the terminal and the AI agent.</p>

            <div class="do-it">
                <h3>1. List your active MCP servers</h3>
                <pre><code>docker mcp server ls</code><button class="copy-btn">Copy</button></pre>
                <p>Expected output:</p>
                <pre><code>github-official    ▲ required    ✓ done    -    Official GitHub MCP Server, by GitHub. Provide...
playwright         -             -         -    Playwright MCP server.</code></pre>

                <h3>2. List available MCP tools</h3>
                <pre><code>docker mcp tools ls</code><button class="copy-btn">Copy</button></pre>
                <p>You should see tools like:</p>
                <pre><code>get_commit                  Get commit details
search_pull_requests        Search pull requests
search_repositories         Search repositories</code></pre>

                <h3>3. Try it in the AI agent</h3>
                <p>Open GitHub Copilot Chat (or your AI agent) in VS Code and ask:</p>
                <pre><code>Can you list my GitHub repositories?</code><button class="copy-btn">Copy</button></pre>
                <p>The agent should use the <strong>GitHub Official MCP server</strong> from the catalog to answer — no manual API wiring needed!</p>
            </div>
        `
    },
    {
        title: "Wizard 2: Build a Custom MCP Server",
        content: `
            <div style="text-align:center; padding: 4rem 2rem;">
                <p style="font-size:0.9rem; letter-spacing:0.15em; text-transform:uppercase; color:#666; margin-bottom:0.5rem;">Part 2</p>
                <h2 style="font-size:3rem; margin-bottom:1.5rem; border-bottom: 3px solid #111; display:inline-block; padding-bottom:0.5rem;">Wizard 2</h2>
                <p style="font-size:1.3rem; max-width:600px; margin:0 auto;">In this wizard you will build your own <strong>custom MCP time server</strong> using Deno + TypeScript, containerise it with Docker, publish it to a local catalog, and expose it through the MCP Gateway so any AI client can call it.</p>
            </div>
        `
    },
    {
        title: "Core MCP Server Concepts",
        content: `
            <p>Before we start building, here are the three core capabilities an MCP server can expose:</p>
            <ul>
                <li><strong>Resources</strong> — File-like data that clients can read (e.g. API responses, file contents, DB records).</li>
                <li><strong>Tools</strong> — Functions that the LLM can call (with user approval) to perform real actions.</li>
                <li><strong>Prompts</strong> — Pre-written templates that help users accomplish specific tasks.</li>
            </ul>
            <p>This tutorial will primarily focus on <strong>tools</strong>.</p>
            <p>More info: <a href="https://modelcontextprotocol.io/docs/learn/server-concepts" target="_blank">modelcontextprotocol.io/docs/learn/server-concepts</a></p>
            <p>Examples: <a href="https://github.com/modelcontextprotocol/servers/tree/main/src/everything" target="_blank">github.com/modelcontextprotocol/servers/tree/main/src/everything</a></p>
        `
    },
    {
        title: "Wizard 2: Scaffold a Custom Server",
        content: `
            <p>Now, let's learn how to build our own custom time server using Deno.</p>
            <div class="do-it">
                <h3>Do it</h3>
                <p>First, enable Deno in your VS Code workspace (via command palette: <code>Deno: Enable</code>).</p>
                <p>Create a <code>src/server.ts</code> file with this basic setup:</p>
                <pre><code>import { McpServer } from '@mcp/server';
import { StdioServerTransport } from '@mcp/stdio';
import { z } from 'zod';

const server = new McpServer({
    name: 'dim-mcp-time-server',
    version: '1.0.0'
});

// We will add the tool next...

const transport = new StdioServerTransport();
await server.connect(transport);</code><button class="copy-btn">Copy</button></pre>
            </div>
        `
    },
    {
        title: "Wizard 2: Implement the Tool",
        content: `
            <div class="do-it">
                <h3>1. Create <code>deno.json</code></h3>
                <p>This configures Deno's task runner and module imports for your server.</p>
                <pre><code>{
    "tasks": {
        "start": "deno run --allow-env --allow-read --allow-net src/server.ts"
    },
    "lock": false,
    "imports": {
        "@mcp/sdk": "npm:@modelcontextprotocol/sdk@^1.0.1",
        "@mcp/server": "npm:@modelcontextprotocol/sdk/server/mcp.js",
        "@mcp/stdio": "npm:@modelcontextprotocol/sdk/server/stdio.js",
        "zod": "npm:zod@^3.23.8"
    }
}</code><button class="copy-btn">Copy</button></pre>

                <h3>2. Add the tool in <code>src/server.ts</code></h3>
                <pre><code>server.registerTool('get_current_time', {
    title: 'Get Current Time Tool',
    description: 'Get the current server time',
    inputSchema: { timezone: z.string() },
    outputSchema: { result: z.string() }
}, async ({ timezone }) => {
    const currentTime = new Date().toLocaleString('en-US', { timeZone: timezone });
    return {
            content: [{ type: 'text', text: JSON.stringify(output) }],
            structuredContent: output
        };
});</code><button class="copy-btn">Copy</button></pre>
            </div>
        `
    },
    {
        title: "Wizard 2: Create the Dockerfile",
        content: `
            <p>Containerising the server so that the Docker MCP Gateway can discover and run it automatically.</p>
            <div class="do-it">
                <h3>Create a <code>Dockerfile</code> in your project root</h3>
                <pre><code>FROM denoland/deno:2.6.10
EXPOSE 8000

WORKDIR /app

# Prefer not to run as root.
USER deno

# These steps will be re-run upon each file change in your working directory:
COPY . .

# Compile the main app so that it doesn't need to be compiled each startup/entry.
RUN deno cache --config deno.json src/server.ts

CMD ["task", "start"]</code><button class="copy-btn">Copy</button></pre>
            </div>
        `
    },
    {
        title: "Wizard 2: Build the Image",
        content: `
            <p>Your Dockerfile is ready. Let's containerise the server so Docker can run it.</p>
            <div class="do-it">
                <h3>Build the Docker image</h3>
                <pre><code>docker build -t dim-mcp-time-server .</code><button class="copy-btn">Copy</button></pre>
                <p>Then open <strong>Docker Desktop</strong> and confirm the image <code>dim-mcp-time-server</code> appears under <em>Images</em>.</p>
            </div>
        `
    },
    {
        title: "Wizard 2: Bootstrap the Catalog",
        content: `
            <p>A catalog is a YAML file that describes your MCP servers. Bootstrap an empty one and fill in your server's details.</p>
            <div class="do-it">
                <h3>1. Create an empty catalog file</h3>
                <pre><code>docker mcp catalog bootstrap ./dim-mcp-catalog.yaml</code><button class="copy-btn">Copy</button></pre>

                <h3>2. Add your server entry to <code>dim-mcp-catalog.yaml</code></h3>
                <p>The required fields are <code>dateAdded</code>, <code>description</code>, <code>image</code>, <code>metadata</code>, <code>title</code>, <code>type</code>, and <code>tools</code>.</p>
                <pre><code>dim-mcp-time-server:
    dateAdded: "2026-03-03T00:00:00Z"
    description: Custom MCP Time Server
    image: dim-mcp-time-server:latest
    metadata:
        category: custom
        owner: dimitricasierhowest
    title: DIM MCP Time Server
    type: server
    tools:
        - name: get_current_time</code><button class="copy-btn">Copy</button></pre>

                <h3>Expected file structure at this point</h3>
                <pre><code>.
├── .vscode
│   ├── mcp.json
│   └── settings.json
├── src
│   └── server.ts
├── deno.json
├── dim-mcp-catalog.yaml
└── Dockerfile</code></pre>
            </div>
        `
    },
    {
        title: "Wizard 2: Import & Verify the Catalog",
        content: `
            <p>Import the catalog file into Docker Desktop and verify everything is registered correctly.</p>
            <div class="do-it">
                <h3>1. Import the catalog</h3>
                <pre><code>docker mcp catalog import ./dim-mcp-catalog.yaml</code><button class="copy-btn">Copy</button></pre>
                <p>When prompted, type the name of your new catalog (e.g. <strong>dim-catalog</strong>).</p>

                <h3>2. Enable server</h3>
                <pre><code>docker mcp server enable dim-mcp-time-server</code><button class="copy-btn">Copy</button></pre>
                

                <h3>3. List all catalogs</h3>
                <pre><code>docker mcp catalog ls</code><button class="copy-btn">Copy</button></pre>
                <p>Expected output:</p>
                <pre><code>dim-catalog: dim-catalog
docker-mcp: Docker MCP Catalog</code></pre>

                <h3>3. Inspect your catalog</h3>
                <pre><code>docker mcp catalog show dim-catalog</code><button class="copy-btn">Copy</button></pre>
                <p>Expected output:</p>
                <pre><code>MCP Server Directory
  3 servers available
  ───────────────────────────────────────────────────────────────────────

  dim-mcp-time-server
    Custom MCP Time Server

  docker
    Use the Docker CLI.

  dockerhub
    Docker Hub official MCP server.

  ───────────────────────────────────────────────────────────────────────
  3 servers total</code></pre>

                <h3>4. List available tools</h3>
                <pre><code>docker mcp tools ls</code><button class="copy-btn">Copy</button></pre>
                <p>You should see your custom tool listed:</p>
                <pre><code>get_current_time    Get the current server time</code></pre>
            </div>
        `
    },
    {
        title: "Wizard 2: Restart & Test",
        content: `
            <p>The gateway needs a restart to pick up your new catalog. Then trigger the tool from the AI agent!</p>
            <div class="do-it">
                <h3>1. Restart the MCP Gateway</h3>
                <p>Open <code>.vscode/mcp.json</code> in VS Code and click <strong>Restart</strong> next to your gateway entry.</p>

                <h3>2. Try it in the AI agent</h3>
                <p>Open GitHub Copilot Chat (or your AI agent) and ask:</p>
                <pre><code>What is the current time in Europe/Brussels?</code><button class="copy-btn">Copy</button></pre>
                <p>The agent should call your custom <strong>get_current_time</strong> tool — shipped as a container, served through the Gateway!</p>
                <p>If the agent doesn't use the tool automatically, be more explicit:</p>
                <pre><code>Use the get_current_time MCP server tool to tell me the current time in<br/>Europe/Brussels.</code><button class="copy-btn">Copy</button></pre>
            </div>
        `
    },
    {
        title: "Wizard 3: Add a New Tool",
        content: `
            <div style="text-align:center; padding: 4rem 2rem;">
                <p style="font-size:0.9rem; letter-spacing:0.15em; text-transform:uppercase; color:#666; margin-bottom:0.5rem;">Part 3</p>
                <h2 style="font-size:3rem; margin-bottom:1.5rem; border-bottom: 3px solid #111; display:inline-block; padding-bottom:0.5rem;">Wizard 3</h2>
                <p style="font-size:1.3rem; max-width:600px; margin:0 auto;">In this wizard you will extend your custom MCP server by adding a second tool — <strong>get_current_time_tomorrow</strong> — then rebuild the Docker image, re-import the catalog, restart the gateway, and verify the new tool appears in your AI agent.</p>
            </div>
        `
    },
    {
        title: "Core MCP Server Concepts",
        content: `
            <p>Before we start building, here are the three core capabilities an MCP server can expose:</p>
            <ul>
                <li><strong>Resources</strong> — File-like data that clients can read (e.g. API responses, file contents, DB records).</li>
                <li><strong>Tools</strong> — Functions that the LLM can call (with user approval) to perform real actions.</li>
                <li><strong>Prompts</strong> — Pre-written templates that help users accomplish specific tasks.</li>
            </ul>
            <p>This tutorial will primarily focus on <strong>tools</strong>.</p>
            <p>More info: <a href="https://modelcontextprotocol.io/docs/learn/server-concepts" target="_blank">modelcontextprotocol.io/docs/learn/server-concepts</a></p>
            <p>Examples: <a href="https://github.com/modelcontextprotocol/servers/tree/main/src/everything" target="_blank">github.com/modelcontextprotocol/servers/tree/main/src/everything</a></p>
        `
    },
    {
        title: "Wizard 3: Add the New Tool",
        content: `
            <p>Open <code>src/server.ts</code> and add the following tool after the existing <code>get_current_time</code> registration.</p>
            <div class="do-it">
                <h3>Add to <code>src/server.ts</code></h3>
                <pre><code>// Add a get current time tomorrow tool
server.registerTool(
    'get_current_time_tomorrow',
    {
        title: 'Get Current Time Tomorrow Tool',
        description: 'Get the server time for tomorrow (24 hours from now)',
        inputSchema: { timezone: z.string().describe('Timezone in IANA format, e.g., America/New_York') },
        outputSchema: { result: z.string() }
    },
    async ({ timezone }) => {
        const tomorrow = new Date(Date.now() + 24 * 60 * 60 * 1000);
        const tomorrowTime = tomorrow.toLocaleString('en-US', { timeZone: timezone });
        const output = { result: tomorrowTime };
        return {
            content: [{ type: 'text', text: JSON.stringify(output) }],
            structuredContent: output
        };
    }
);</code><button class="copy-btn">Copy</button></pre>
            </div>
        `
    },
    {
        title: "Wizard 3: Rebuild & Re-import",
        content: `
            <p>The server code changed, so we need to rebuild the Docker image and re-import the catalog to pick up the new tool.</p>
            <div class="do-it">
                <h3>1. Delete the old image from Docker Desktop</h3>
                <p>Open Docker Desktop → <em>Images</em> → delete <code>dim-mcp-time-server</code>.</p>

                <h3>2. Rebuild the image</h3>
                <pre><code>docker build -t dim-mcp-time-server .</code><button class="copy-btn">Copy</button></pre>

                <h3>3. Re-import the catalog</h3>
                <pre><code>docker mcp catalog import ./dim-mcp-catalog.yaml</code><button class="copy-btn">Copy</button></pre>
                <p>When prompted, type your existing catalog name (e.g. <strong>dim-catalog</strong>).</p>

                <h3>4. Restart the gateway</h3>
                <p>Open <code>.vscode/mcp.json</code> in VS Code and click <strong>Restart</strong> next to your gateway entry.</p>
            </div>
        `
    },
    {
        title: "Wizard 3: Verify & Test",
        content: `
            <p>Confirm the new tool is registered and trigger it from the AI agent.</p>
            <div class="do-it">
                <h3>1. Check the tool list</h3>
                <pre><code>docker mcp tools ls</code><button class="copy-btn">Copy</button></pre>
                <p>Look for the new tool in the output:</p>
                <pre><code>get_current_time            Get the current server time
get_current_time_tomorrow   Get the server time for tomorrow (24 hours from now)</code></pre>

                <h3>2. Try it in the AI agent</h3>
                <pre><code>What will the time be in Europe/Brussels tomorrow?</code><button class="copy-btn">Copy</button></pre>
                <p>If the agent doesn't call it automatically, be explicit:</p>
                <pre><code>Use the get_current_time_tomorrow MCP server tool to tell me the time in <br/>Europe/Brussels tomorrow.</code><button class="copy-btn">Copy</button></pre>
            </div>
        `
    },
    {
        title: "Recap: Build a Custom MCP Server",
        content: `
            <p style="margin-bottom:1.5rem;">Here is the complete checklist of every step required to go from zero to a running custom MCP server connected to your AI agent.</p>

            <div class="do-it">
                <h3>1. Create <code>deno.json</code></h3>
                <p>Add a <code>start</code> task and import map entries for the MCP SDK and Zod.</p>

                <h3>2. Write the server</h3>
                <p>Enable Deno in VS Code (<code>Deno: Enable</code>) and create <code>src/server.ts</code> with your <code>McpServer</code> instance and at least one <code>registerTool</code> call.</p>

                <h3>3. Write the <code>Dockerfile</code></h3>
                <p>Use <code>denoland/deno</code> as the base image, copy the project, cache dependencies, and set <code>CMD ["task", "start"]</code>.</p>

                <h3>4. Build the Docker image</h3>
                <pre><code>docker build -t &lt;your-image-name&gt; .</code><button class="copy-btn">Copy</button></pre>
                <p>Verify the image appears in Docker Desktop → <em>Images</em>.</p>

                <h3>5. Configure the gateway in VS Code</h3>
                <p>Create or update <code>.vscode/mcp.json</code> with the gateway entry:</p>
                <pre><code>{
    "servers": {
        "my-mcp-gateway-docker": {
            "type": "stdio",
            "command": "docker",
            "args": [
                "mcp",
                "gateway",
                "run"
            ]
        }
    },
    "inputs": []
}</code><button class="copy-btn">Copy</button></pre>

                <h3>6. Bootstrap & populate the catalog</h3>
                <pre><code>docker mcp catalog bootstrap ./my-catalog.yaml</code><button class="copy-btn">Copy</button></pre>
                <p>Add your server entry (with <code>image</code>, <code>title</code>, <code>description</code>, <code>tools</code>, …) to the generated YAML file.</p>

                <h3>7. Import the catalog</h3>
                <pre><code>docker mcp catalog import ./my-catalog.yaml</code><button class="copy-btn">Copy</button></pre>
                <p>Type a catalog name when prompted (e.g. <strong>dim-catalog</strong>).</p>
                <p><strong>Note:</strong> <code>import</code> <mark class="highlight">overwrites any previous entries for that catalog</mark>. If you only want to add a single server to an existing catalog without replacing it, use <code>catalog add</code> instead:</p>
                <pre><code>docker mcp catalog add &lt;catalog&gt; &lt;server-name&gt; &lt;catalog-file&gt;</code><button class="copy-btn">Copy</button></pre>

                <h3>8. Enable the server</h3>
                <pre><code>docker mcp server enable &lt;your-server-name&gt;</code><button class="copy-btn">Copy</button></pre>

                <h3>9. Verify everything is registered</h3>
                <pre><code>docker mcp catalog ls
docker mcp tools ls</code><button class="copy-btn">Copy</button></pre>
                <p>Your custom tool should appear in the tools list.</p>

                <h3>10. Restart the gateway in VS Code</h3>
                <p>Open <code>.vscode/mcp.json</code> and click <strong>Restart</strong> next to the gateway entry so VS Code picks up the new server.</p>

                <h3>11. Test in the AI agent</h3>
                <p>Open GitHub Copilot Chat and ask a question that triggers your tool. If needed, be explicit:</p>
                <pre><code>Use the &lt;your-tool-name&gt; MCP server tool to …</code><button class="copy-btn">Copy</button></pre>

                <h3>When you update the server code</h3>
                <p>Delete the old image in Docker Desktop, then repeat steps <strong>4 → 7 → 10</strong>: rebuild, re-import, restart gateway.</p>
            </div>

            <div class="do-it">
                <h3>Useful commands</h3>
                <p>List all catalogs:</p>
                <pre><code>docker mcp catalog ls</code><button class="copy-btn">Copy</button></pre>

                <p>Show available servers in a catalog:</p>
                <pre><code>docker mcp catalog show &lt;catalog&gt;</code><button class="copy-btn">Copy</button></pre>

                <p>Show all available tools (across all active catalogs):</p>
                <pre><code>docker mcp tools ls</code><button class="copy-btn">Copy</button></pre>

                <p>Show tools from a specific catalog only:</p>
                <pre><code>docker mcp tools ls --catalog &lt;catalog&gt;</code><button class="copy-btn">Copy</button></pre>

                <p>You can append <code>--help</code> to any command to see all available options:</p>
                <pre><code>docker mcp --help
docker mcp catalog --help</code><button class="copy-btn">Copy</button></pre>
            </div>
        `
    },
    {
        title: "Example: MCP Student Server",
        content: `
            <p>Want to see a complete, real-world example? Check out the <strong>MCP Student Server</strong> — a project built for learning purposes as part of the Applied AI course at Howest.</p>
            <p><a href="https://github.com/dimitricasierhowest/ai-example-mcp-student-score" target="_blank">https://github.com/dimitricasierhowest/ai-example-mcp-student-score</a></p>
            <p>It demonstrates how to build and deploy a custom MCP server using <strong>Deno + TypeScript</strong> and <strong>Docker</strong>. The server manages student scores for classes and assignments, with scores persisted to a <code>scores.json</code> file mounted via a Docker volume.</p>

            <table style="width:100%; border-collapse:collapse; margin-top:1.5rem;">
                <thead>
                    <tr style="border-bottom:2px solid #111;">
                        <th style="text-align:left; padding:0.5rem 1rem 0.5rem 0;">Tool</th>
                        <th style="text-align:left; padding:0.5rem 0;">Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom:1px solid #ddd;">
                        <td style="padding:0.6rem 1rem 0.6rem 0; white-space:nowrap;"><code>addStudentScore</code></td>
                        <td style="padding:0.6rem 0;">Record a student's score for a specific assignment in a class</td>
                    </tr>
                    <tr style="border-bottom:1px solid #ddd;">
                        <td style="padding:0.6rem 1rem 0.6rem 0; white-space:nowrap;"><code>getScoresByClass</code></td>
                        <td style="padding:0.6rem 0;">Retrieve all scores for a specific class</td>
                    </tr>
                    <tr style="border-bottom:1px solid #ddd;">
                        <td style="padding:0.6rem 1rem 0.6rem 0; white-space:nowrap;"><code>getScoresByStudent</code></td>
                        <td style="padding:0.6rem 0;">Retrieve all scores for a specific student</td>
                    </tr>
                    <tr style="border-bottom:1px solid #ddd;">
                        <td style="padding:0.6rem 1rem 0.6rem 0; white-space:nowrap;"><code>listClassNames</code></td>
                        <td style="padding:0.6rem 0;">List all unique class names that have scores</td>
                    </tr>
                    <tr style="border-bottom:1px solid #ddd;">
                        <td style="padding:0.6rem 1rem 0.6rem 0; white-space:nowrap;"><code>getAllScores</code></td>
                        <td style="padding:0.6rem 0;">Retrieve all stored scores</td>
                    </tr>
                    <tr>
                        <td style="padding:0.6rem 1rem 0.6rem 0; white-space:nowrap;"><code>clearAllScores</code></td>
                        <td style="padding:0.6rem 0;">Delete all stored scores permanently</td>
                    </tr>
                </tbody>
            </table>
        `
    },
    {
        title: "Final Quiz: Q1 & Q2",
        content: `
            <div class="qa-block">
                <div class="qa-question"><span class="q-label">Question 1 / 10</span>What problem does the Model Context Protocol (MCP) solve?</div>
                <button class="show-answer-btn" onclick="toggleAnswer(this)">Show Answer</button>
                <div class="qa-answer" style="display:none">
                    Large Language Models are powerful but isolated. By default they cannot access files, APIs, or databases. MCP solves this by providing a <strong>standard protocol that lets AI applications connect to external tools and data sources</strong>. Instead of building custom integrations for every tool, developers expose capabilities through MCP servers that any compatible AI client can use.
                </div>
            </div>
            <div class="qa-block">
                <div class="qa-question"><span class="q-label">Question 2 / 10</span>What is the difference between an MCP Client and an MCP Server?</div>
                <button class="show-answer-btn" onclick="toggleAnswer(this)">Show Answer</button>
                <div class="qa-answer" style="display:none">
                    An <strong>MCP Client</strong> is an AI application (e.g. VS Code, an AI agent) that wants to use external capabilities.<br><br>
                    An <strong>MCP Server</strong> is a program that exposes capabilities to the client. It can expose three main things:
                    <ul>
                        <li><strong>Tools</strong> – functions that perform actions</li>
                        <li><strong>Resources</strong> – data the AI can read as context</li>
                        <li><strong>Prompts</strong> – reusable templates that guide interactions</li>
                    </ul>
                    The client connects to the server and discovers and uses these capabilities.
                </div>
            </div>
        `
    },
    {
        title: "Final Quiz: Q3 & Q4",
        content: `
            <div class="qa-block">
                <div class="qa-question"><span class="q-label">Question 3 / 10</span>Why is MCP described as solving the "N × M integration problem"?</div>
                <button class="show-answer-btn" onclick="toggleAnswer(this)">Show Answer</button>
                <div class="qa-answer" style="display:none">
                    Without MCP, every AI application needs its own integration for every external tool. With 5 AI apps and 10 tools that is <strong>50 custom integrations</strong>.<br><br>
                    MCP solves this by introducing a <strong>standard interface</strong>. Each tool only needs to implement MCP once, and any MCP-compatible client can use it — reducing 50 integrations to 5 + 10.
                </div>
            </div>
            <div class="qa-block">
                <div class="qa-question"><span class="q-label">Question 4 / 10</span>What is the difference between MCP tools and MCP resources?</div>
                <button class="show-answer-btn" onclick="toggleAnswer(this)">Show Answer</button>
                <div class="qa-answer" style="display:none">
                    Both are exposed by MCP servers but serve different purposes.<br><br>
                    <strong>Tools</strong> — perform actions:
                    <ul>
                        <li>querying a database</li>
                        <li>sending an API request</li>
                        <li>modifying a file</li>
                    </ul>
                    <strong>Resources</strong> — provide data or context:
                    <ul>
                        <li>file contents</li>
                        <li>database records</li>
                        <li>user information</li>
                    </ul>
                    In short: <strong>Tools = actions, Resources = data</strong>.
                </div>
            </div>
        `
    },
    {
        title: "Final Quiz: Q5 & Q6",
        content: `
            <div class="qa-block">
                <div class="qa-question"><span class="q-label">Question 5 / 10</span>How does MCP allow AI models to use information that was not in their training data?</div>
                <button class="show-answer-btn" onclick="toggleAnswer(this)">Show Answer</button>
                <div class="qa-answer" style="display:none">
                    MCP allows AI models to retrieve real-time information from external systems. An MCP server could expose:
                    <ul>
                        <li>a database query tool</li>
                        <li>a GitHub repository search tool</li>
                        <li>a file system resource</li>
                    </ul>
                    When a user asks a question, the AI calls these tools to retrieve <strong>live data</strong>, allowing it to produce answers based on <strong>current information instead of only training data</strong>.
                </div>
            </div>
            <div class="qa-block">
                <div class="qa-question"><span class="q-label">Question 6 / 10</span>What role does an MCP Gateway play in a large system?</div>
                <button class="show-answer-btn" onclick="toggleAnswer(this)">Show Answer</button>
                <div class="qa-answer" style="display:none">
                    When many MCP servers exist, configuring every AI client to connect to each server becomes difficult. An <strong>MCP Gateway</strong> acts as a <strong>central connection point</strong>.<br><br>
                    Instead of connecting to many servers, the client connects once to the gateway. The gateway then manages:
                    <ul>
                        <li>routing requests to servers</li>
                        <li>authentication and credentials</li>
                        <li>server lifecycle and configuration</li>
                    </ul>
                    <span class="qa-note">Note: gateways are infrastructure tools and not required by the MCP specification itself.</span>
                </div>
            </div>
        `
    },
    {
        title: "Final Quiz: Q7 & Q8",
        content: `
            <div class="qa-block">
                <div class="qa-question"><span class="q-label">Question 7 / 10</span>Why are MCP servers often distributed as Docker containers?</div>
                <button class="show-answer-btn" onclick="toggleAnswer(this)">Show Answer</button>
                <div class="qa-answer" style="display:none">
                    Docker containers package the MCP server together with its runtime and dependencies. This provides:
                    <ul>
                        <li>the server runs the same on every machine</li>
                        <li>deployment is easier</li>
                        <li>versioning and updates are controlled</li>
                        <li>environments are isolated and reproducible</li>
                    </ul>
                    This is why many MCP ecosystems distribute servers as container images.
                </div>
            </div>
            <div class="qa-block">
                <div class="qa-question"><span class="q-label">Question 8 / 10</span>What happens when an AI agent "calls a tool" in MCP?</div>
                <button class="show-answer-btn" onclick="toggleAnswer(this)">Show Answer</button>
                <div class="qa-answer" style="display:none">
                    When the AI agent decides a tool is needed:
                    <ol>
                        <li>The agent selects a tool exposed by an MCP server</li>
                        <li>It sends the required input parameters</li>
                        <li>The server executes the function</li>
                        <li>The result is returned to the AI</li>
                    </ol>
                    The AI can then use that result to continue reasoning or generate a response.
                </div>
            </div>
        `
    },
    {
        title: "Final Quiz: Q9 & Q10",
        content: `
            <div class="qa-block">
                <div class="qa-question"><span class="q-label">Question 9 / 10</span>What is the difference between an Agent Skill (SKILL.md) and an MCP tool?</div>
                <button class="show-answer-btn" onclick="toggleAnswer(this)">Show Answer</button>
                <div class="qa-answer" style="display:none">
                    Both extend what an AI agent can do, but differently.<br><br>
                    <strong>Agent Skills (SKILL.md)</strong>
                    <ul>
                        <li>A folder with instructions and workflows written in Markdown</li>
                        <li>Teaches the agent <em>how to perform a task</em></li>
                        <li>Usually loaded locally by the agent</li>
                    </ul>
                    <strong>MCP Tools</strong>
                    <ul>
                        <li>Executable functions exposed by a server</li>
                        <li>Allow the agent to <em>interact with external systems</em></li>
                    </ul>
                    <strong>Skills teach the agent what steps to follow. MCP tools let the agent perform real actions in the outside world.</strong>
                </div>
            </div>
            <div class="qa-block">
                <div class="qa-question"><span class="q-label">Question 10 / 10</span>Why is MCP often compared to "USB-C for AI"?</div>
                <button class="show-answer-btn" onclick="toggleAnswer(this)">Show Answer</button>
                <div class="qa-answer" style="display:none">
                    USB-C provides a <strong>universal connector</strong> that works with many devices regardless of manufacturer.<br><br>
                    Similarly, MCP provides a <strong>universal protocol for connecting AI systems to tools and data sources</strong>. Instead of building many custom integrations, developers use one standardized interface that works across many clients and servers.
                </div>
            </div>
        `
    }
];

function toggleAnswer(btn) {
    const answer = btn.nextElementSibling;
    const isHidden = answer.style.display === 'none';
    answer.style.display = isHidden ? 'block' : 'none';
    btn.textContent = isHidden ? 'Hide Answer' : 'Show Answer';
    btn.classList.toggle('revealed', isHidden);
}

let currentSlideIndex = 0;

function initWizard() {
    const container = document.getElementById('wizard-container');
    slidesData.forEach((slide, idx) => {
        const div = document.createElement('div');
        div.className = 'slide';
        div.id = 'slide-' + idx;
        div.innerHTML = '<h2>' + slide.title + '</h2>' + slide.content;
        container.appendChild(div);
    });

    const savedIndex = localStorage.getItem('mcpWizardStep');
    if (savedIndex !== null) {
        currentSlideIndex = parseInt(savedIndex, 10);
    }

    document.querySelectorAll('.copy-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const code = e.target.previousSibling.innerText;
            navigator.clipboard.writeText(code);
            e.target.innerText = 'COPIED!';
            setTimeout(() => e.target.innerText = 'COPY', 2000);
        });
    });

    const warmupInput = document.getElementById('warmup-input');
    if (warmupInput) {
        warmupInput.value = localStorage.getItem('mcpWarmup') || '';
        warmupInput.addEventListener('input', (e) => {
            localStorage.setItem('mcpWarmup', e.target.value);
        });
    }

    document.getElementById('btn-prev').addEventListener('click', goPrev);
    document.getElementById('btn-next').addEventListener('click', goNext);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') goNext();
        if (e.key === 'ArrowLeft') goPrev();
    });

    renderSlide();
}

function renderSlide() {
    document.getElementById('wizard-container').scrollTo(0,0);
    window.scrollTo(0,0);

    document.querySelectorAll('.slide').forEach((el, idx) => {
        el.classList.toggle('active', idx === currentSlideIndex);
    });

    document.getElementById('btn-prev').disabled = currentSlideIndex === 0;
    
    const isQuizSlide = currentSlideIndex === slidesData.length - 1;
    document.getElementById('btn-next').style.display = isQuizSlide ? 'none' : 'block';

    document.getElementById('step-indicator').innerText = (currentSlideIndex + 1) + ' / ' + slidesData.length;
    
    const progressPercent = ((currentSlideIndex + 1) / slidesData.length) * 100;
    document.getElementById('progress-fill').style.width = progressPercent + '%';

    localStorage.setItem('mcpWizardStep', currentSlideIndex.toString());
}

function goNext() {
    if (currentSlideIndex < slidesData.length - 1) {
        currentSlideIndex++;
        renderSlide();
    }
}

function goPrev() {
    if (currentSlideIndex > 0) {
        currentSlideIndex--;
        renderSlide();
    }
}

window.onload = initWizard;
