const path = require("path");
const ejs = require("ejs");
const puppeteer = require("puppeteer");

async function descargarTicket(req, res) {
  const ticket = new Ticket();
  ticket.id = 100;
  ticket.fecha = "05/11/2025";
  ticket.nombre = "Jhon Doe";
  ticket.producto = "Botin Adidas talle 42";
  ticket.total = "80000";
  ticket.esVista = false;

  let vista = path.join(__dirname, "10vistas", "ticket.ejs");
  let html = await ejs.renderFile(vista, { ticket });

  const browser = await puppeteer.launch({
    headless: true,
  });

  const page = await browser.newPage();

  await page.setContent(html);

  const pdfBuffer = await page.pdf({
    format: "A4",
    printBackground: true,
    margin: {
      top: "20px",
      bottom: "20px",
      right: "20px",
      left: "20px",
    },
    headerTemplate: "<h1>Descarga</h1>",
    footerTemplate: "<h1>Footer</h1>",
  });

  await browser.close();

  res.set({
    "Content-Type": "Application/pdf",
    "Content-Disposition": `attachment; filename="ticket100.pdf"`,
  });

  res.send(pdfBuffer);
}

async function generatePdf(req, res) {
  try {
    const url = req.params.url;

    const browser = await puppeteer.launch({
      headless: true,
    });

    const page = await browser.newPage();

    await page.goto(`https://${url}`, { waitUntil: "networkidle2" });

    const pdfBuffer = await page.pdf({
      format: "A4",
      printBackground: true,
      margin: {
        top: "20px",
        bottom: "20px",
        right: "20px",
        left: "20px",
      },
    });

    res.set({
      "Content-Type": "Application/pdf",
      "Content-Disposition": `attachment; filename="${url}.pdf"`,
    });

    res.send(pdfBuffer);
  } catch (error) {
    console.log(error);
  }
}

app.get("/ticket", getTicket);
app.get("/ticket/download", descargarTicket);
app.get("/site/:url", generatePdf);

app.listen(port, () => {
  console.log("Servidor escuchando en el puerto " + port);
});
