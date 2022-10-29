Exercise1.1:1.
When a user enters an URL in the browser, how does the browser fetch the desiredresult ? Explain this with the below in mind and Demonstrate this by drawing a diagramfor the same

 When the user enters the URL in browser, follow actions takes place in browser and as background task.
     - You type a URL in your browser and press Enter.
     - Browser looks up IP address for the domain by reaching to DNS server.
     - Browser initiates TCP connection with the server and establishes TCP connection with server.
     - Browser sends the HTTP request to the server with proper header and body as requested by user.
     - Server processes request and sends back a response.
     - Browser renders the content after parsing the HTTP response.

a. What is the main functionality of the browser?
    The main functionality of web browser is to access `World Wide Web` or `Local Website`. Web browser is a application software which helps user to request a webpage from a website. Its web browsers repsonsibility to render files from webserver and graphically display it on the computer screen or mobile device of the user.

b. High Level Components of a browser.
     - The user interface: this includes the address bar, back/forward button, bookmarking menu, etc. Every part of the browser display except the window where you see the requested page.
     - The browser engine: marshals actions between the UI and the rendering engine.
     - The rendering engine: responsible for displaying requested content. For example if the requested content is HTML, the rendering engine parses HTML and CSS, and displays the parsed content on the screen.
     - Networking: for network calls such as HTTP requests, using different implementations for different platform behind a platform-independent interface.
     - UI backend: used for drawing basic widgets like combo boxes and windows. This backend exposes a generic interface that is not platform specific. Underneath it uses operating system user interface methods.
     - JavaScript interpreter. Used to parse and execute JavaScript code.
     - Data storage. This is a persistence layer. The browser may need to save all sorts of data locally, such as cookies. Browsers also support storage mechanisms such as localStorage, IndexedDB, WebSQL and FileSystem.

                                -----------------------------------
                                |          UI Interface           |
                                |                                 |----
                                -----------------------------------    |
                                                |                       |
                                                |                       |
                                                |                       |
                                -----------------------------------    |
                                |          Browser Engine         |    |           -----------------------------------
                                |                                 |----|-----------|        Data persistance         |
                                -----------------------------------    |           |                                 |
                                                |                       |           -----------------------------------
                                                |                       |
                                                |                       |
                                -----------------------------------    |
                                |          Rendering Engine       |    |
                                |                                 |    |
                                -----------------------------------    |
                                |               |                 |    |
                                |               |                 |    |
                                |               |                 |    |
                            Networking    JavaScript         UI Backend
                                            Interpreter                


c. Rendering engine and its use.
    Rendering engine is module in browser which is responisbile to display the request content after parsing the HTML tags and CSS styling.


        Parsing HTML to     ---------->  Render Tree   ----------->  Layout of        ------------>   Painting Render  
        Construct DOM Tree              construction                 Render Screen                      Tree


    The four basic steps include:

     - The requested HTML page is parsed in chunks, including the external CSS files and in style elements, by the rendering engine. The HTML elements are then converted into DOM nodes to form a “content tree” or “DOM tree.”
     - The browser also creates a render tree. This tree includes both the styling information as well as the visual instructions that define the order in which the elements will be displayed. The render tree ensures that the content is displayed in the desired order.
     - The render tree goes through the layout process. When a render tree is created, the position or size values are not assigned. The entire process of calculating values for evaluating the desired position is called a layout process. In this process, every node is assigned the exact coordinates. This ensures that every node appears at an accurate position on the screen.
     - The final step is to paint the screen, wherein the render tree is traversed, and the renderer’s paint() method is invoked, which paints each node on the screen using the UI backend layer.

d. Parsers (HTML, CSS, etc)
    Parsing a document means translating it to a structure the code can use. The result of parsing is usually a tree of nodes that represent the structure of the document. This is called a parse tree or a syntax tree.

    Types of Parsers
        - HTML Parser, The job of the HTML parser is to parse the HTML markup into a parse tree.
        - CSS parsing, 
        - WebKit CSS parser - WebKit uses Flex and Bison parser generators to create parsers automatically from the CSS grammar files.

e. Script processor 
    - script process is parser which parsers the html code to be executed immediately when the parser reaches a `<script> tag`. The parsing of the document halts until the script has been executed. If the script is external then the resource must first be fetched from the network - this is also done synchronously, and parsing halts until the resource is fetched. Now with HTML 5.0, there is optiont defer the execution.

f. Tree construction
    While the DOM tree is being constructed, the browser constructs another tree, the render tree. This tree is of visual elements in the order in which they will be displayed. It is the visual representation of the document. The purpose of this tree is to enable painting the contents in their correct order.

    Firefox calls the elements in the render tree "frames". WebKit uses the term renderer or render object.

    A renderer knows how to lay out and paint itself and its children.

h. Layout and Painting
    The layout is in-charge to calculate the positions and dimensions of each node on the screen. For instance, if you rotate your phone, or if you resize your browser, the layout peace will be executed. let’s take a look another example related to layout.

    Painting - its final phase in rendering where we know which nodes are visible, and their computed styles and geometry, we can pass this information to the final stage, which converts each node in the render tree to actual pixels on the screen
