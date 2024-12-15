## Instalando o Datadog Cli:

```bash
npm install -g @datadog/datadog-ci
```

## Adicionando o datadog na lambda que já está rodando na AWS:

```bash
datadog-ci lambda instrument -i
```

Vai pedir as configurações abaixo que foram fornecidas ao criar a conta no Datadog

```
DD_API_KEY=abcdefghijklmnopqrstuvxz
DD_SITE="us5.datadoghq.com"
```

Ao terminar de configurar, vai adicionar 3 layers na lambda:

- typescript-datad2c721acf-MainFunctiond66060d3-DepLayer
- Datadog-Extension
- Datadog-Node18-x

Também adicionar várias variáveis de ambiente:

- DD_API_KEY
- DD_CAPTURE_LAMBDA_PAYLOAD
- DD_ENV
- DD_FLUSH_TO_LOG
- DD_LAMBDA_HANDLER
- DD_MERGE_XRAY_TRACES
- DD_SERVERLESS_APPSEC_ENABLED
- DD_SERVICE
- DD_SITE
- DD_TRACE_ENABLED
