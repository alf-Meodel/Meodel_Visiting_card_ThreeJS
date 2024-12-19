const express = require('express')
const app = express()
const port = 3003

app.use(express.static('public'))
app.use('/js', express.static('js/public'))
app.use('/models', express.static('models/public'))
app.use('/img', express.static('img/public'))
app.use('/video', express.static('video/public'))
app.use('/images', express.static('images/public'))

app.set('views', './views')
app.set('view engine', 'ejs')

app.get('', (req, res) => {
    res.render('index', { text: "Un peu de texte via ejs" })
})
app.get('/meodel0', (req, res) => {
    res.render('meodel0', { text: "Un peu de texte via ejs" })
})
app.get('/meodel1', (req, res) => {
    res.render('meodel1', { text: "Un peu de texte via ejs" })
})
app.get('/meodel2', (req, res) => {
    res.render('meodel2', { text: "Un peu de texte via ejs" })
})
app.get('/meodel3', (req, res) => {
    res.render('meodel3', { text: "Un peu de texte via ejs" })
})
app.get('/meodel4', (req, res) => {
    res.render('meodel4', { text: "Un peu de texte via ejs" })
})
app.get('/meodel40', (req, res) => {
    res.render('meodel40', { text: "Un peu de texte via ejs" })
})
app.get('/meodel5', (req, res) => {
    res.render('meodel5', { text: "Un peu de texte via ejs" })
})
app.get('/meodel6', (req, res) => {
    res.render('meodel6', { text: "Un peu de texte via ejs" })
})
app.get('/meodel7', (req, res) => {
    res.render('meodel7', { text: "Un peu de texte via ejs" })
})
app.get('/meodel8', (req, res) => {
    res.render('meodel8', { text: "Un peu de texte via ejs" })
})
app.get('/meodel9', (req, res) => {
    res.render('meodel9', { text: "Un peu de texte via ejs" })
})
app.get('/textureWall', (req, res) => {
    res.render('textureWall', { text: "Un peu de texte via ejs" })
})
app.get('/Meodel10', (req, res) => {
    res.render('Meodel10', { text: "Un peu de texte via ejs" })
})

app.get('/xp8', (req, res) => {
    res.render('xp8', { text: "Un peu de texte via ejs" })
})
app.get('/scrollAnchor', (req, res) => {
    res.render('scrollAnchor', { text: "Un peu de texte via ejs" })
})
app.get('/moovy', (req, res) => {
    res.render('moovy', { text: "Un peu de texte via ejs" })
})
app.get('/hParallax', (req, res) => {
    res.render('hParallax', { text: "Un peu de texte via ejs" })
})
app.get('/design1', (req, res) => {
    res.render('design1', { text: "Un peu de texte via ejs" })
})
app.get('/design2', (req, res) => {
    res.render('design2', { text: "Un peu de texte via ejs" })
})
app.get('/design3', (req, res) => {
    res.render('design3', { text: "Un peu de texte via ejs" })
})
app.get('/design4', (req, res) => {
    res.render('design4', { text: "Un peu de texte via ejs" })
})
app.get('/design5', (req, res) => {
    res.render('design5', { text: "Un peu de texte via ejs" })
})
app.get('/bd', (req, res) => {
    res.render('bd', { text: "Un peu de texte via ejs" })
})
app.get('/projector', (req, res) => {
    res.render('projector', { text: "Un peu de texte via ejs" })
})
app.get('/moove0', (req, res) => {
    res.render('moove0', { text: "Un peu de texte via ejs" })
})
app.get('/objectMoove', (req, res) => {
    res.render('objectMoove', { text: "Un peu de texte via ejs" })
})
app.get('/sceneMoove', (req, res) => {
    res.render('sceneMoove', { text: "Un peu de texte via ejs" })
})
app.get('/sceneMoove0', (req, res) => {
    res.render('sceneMoove0', { text: "Un peu de texte via ejs" })
})
app.get('/drag0', (req, res) => {
    res.render('drag0', { text: "Un peu de texte via ejs" })
})
app.get('/drag1', (req, res) => {
    res.render('drag1', { text: "Un peu de texte via ejs" })
})
app.get('/textureChange', (req, res) => {
    res.render('textureChange', { text: "Un peu de texte via ejs" })
})
app.get('/360', (req, res) => {
    res.render('360', { text: "Un peu de texte via ejs" })
})
app.get('/cloth', (req, res) => {
    res.render('cloth', { text: "Un peu de texte via ejs" })
})
app.get('/clickAction', (req, res) => {
    res.render('clickAction', { text: "Un peu de texte via ejs" })
})
app.get('/meodelLogo', (req, res) => {
    res.render('meodelLogo', { text: "Un peu de texte via ejs" })
})
app.get('/boxPanda', (req, res) => {
    res.render('boxPanda', { text: "Un peu de texte via ejs" })
})
app.get('/changeTexture', (req, res) => {
    res.render('changeTexture', { text: "Un peu de texte via ejs" })
})
app.get('/facebook', (req, res) => {
    res.render('facebook', { text: "Un peu de texte via ejs" })
})
app.get('/fog0', (req, res) => {
    res.render('fog0', { text: "Un peu de texte via ejs" })
})
app.get('/card', (req, res) => {
    res.render('card', { text: "Un peu de texte via ejs" })
})
app.get('/maCarte', (req, res) => {
    res.render('maCarte', { text: "Un peu de texte via ejs" })
})
app.get('/videoBackground', (req, res) => {
    res.render('videoBackground', { text: "Un peu de texte via ejs" })
})
app.get('/visualiserNormal', (req, res) => {
    res.render('visualiserNormal', { text: "Un peu de texte via ejs" })
})
app.get('/visuMoove', (req, res) => {
    res.render('visuMoove', { text: "Un peu de texte via ejs" })
})
app.get('/visuDesign', (req, res) => {
    res.render('visuDesign', { text: "Un peu de texte via ejs" })
})
app.get('/jsMooveWindows', (req, res) => {
    res.render('jsMooveWindows', { text: "Un peu de texte via ejs" })
})
app.get('/controlleurMaison', (req, res) => {
    res.render('controlleurMaison', { text: "Un peu de texte via ejs" })
})

app.get('/visuDesign0', (req, res) => {
    res.render('visuDesign0', { text: "Un peu de texte via ejs" })
})

app.get('/visuDesign1', (req, res) => {
    res.render('visuDesign1', { text: "Un peu de texte via ejs" })
})

app.get('/visuDesign2', (req, res) => {
    res.render('visuDesign2', { text: "Un peu de texte via ejs" })
})

app.get('/visuDesign3', (req, res) => {
    res.render('visuDesign3', { text: "Un peu de texte via ejs" })
})

app.get('/raptou', (req, res) => {
    res.render('raptou', { text: "Un peu de texte via ejs" })
})
app.listen(port, () => {
    console.info('http://localhost:' + port)
})