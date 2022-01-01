const path = require("path")


module.exports = {
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index.bundle.js',
    },
    devServer: {
        port: 3041,
        watchContentBase: true,
        historyApiFallback: true, // corrige o erro cannot get pagina do  <Switch> < Route path="/pag1" component={ Pag1 } /></Swith>
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            ///////
            // As 2  regras abaixo servem para difenciar os arquivos css / scss normais dos arquivos usados em modulos css no react
            // Como o webpack exige que os arquivos css usados para m�dulos tenha como nome algumacoisa.module.css esta exig�ncia
            // � aproveitada nos arquivos abaixo : A primeira regra ( sem m�dulo ) usa o " exclude: /\.module\.css$/ " e a 
            // segunda regra (com m�dulo ) usa o  "include: /\.module\.css$/" . Sem estes elementos include e exclude como est�o
            // Abaixo � gerado erro na compila��o pelo webpack.
            // Note que n�o foi necess�rio instalar nenhum plugin adicional para usar o module css
            {
                test: /\.(scss|css)$/,
                use: [
                    'style-loader',
                    // MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
                exclude: /\.module\.css$/
            },
            //////
            {
                test: /\.(css|scss)$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: {
                                localIdentName: "[name]__[local]___[hash:base64:5]",
                            },
                        }
                    }
                ],
                include: /\.module\.css$/
            },
            //////
            {
                test: /\.(jpg|png|svg|gif)$/,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[hash].[ext]',
                },
            },

        ]
    }
}