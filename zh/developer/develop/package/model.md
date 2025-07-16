# Configuration Guideline for model

LLM 的每个应用 Chart 都应在根目录中包含一个 `modelConfig.yaml` 文件。该文件提供了 LLM 所需的基本信息。

一个 modelConfig.yaml 文件的示例如下：
::: details modelConfig.yaml 示例
```Yaml
source_url: https://huggingface.co/TheBloke/Yarn-Mistral-7B-128k-GGUF/resolve/main/yarn-mistral-7b-128k.Q4_K_M.gguf
id: yarnmistral7b
object: model
name: Yarn Mistral 7B Q4
version: '1.0'
description: Yarn Mistral 7B is a language model for long context and supports a 128k token context window.
format: gguf
settings:
  ctx_len: 4096
  prompt_template: |-
    {prompt}
parameters:
  temperature: 0.7
  top_p: 0.95
  stream: true
  max_tokens: 4096
  stop: []
  frequency_penalty: 0
  presence_penalty: 0
metadata:
  author: NousResearch, The Bloke
  tags:
  - 7B
  - Finetuned
  size: 4370000000
engine: nitro
```
:::

## source_url

- 类型：`string`

模型下载源地址, 它可以是外部 url 或本地文件路径。

## id

- 类型：`string`

模型的唯一标识符, 可以在 API 端点中引用。

## object

- 类型：`string`
- 默认：`model`

对象的类型。

## name

- 类型：`string`

模型的名称。

## version

- 类型：`string`

模型的版本号。

## description

- 类型：`string`

模型的描述。

## format

- 类型：`string`

模型的格式。

## settings

模型的设置。

配置示例
```Yaml
settings:
  ctx_len: 4096
  prompt_template: |-
    {prompt}

```

### ctx_len

- 类型：`int`

模型的上下文长度。

### prompt_template

- 类型：`string`

模型的提示模板，用于生成模型输入的提示部分。

## parameters

模型参数。

配置示例：

```
parameters:
  temperature: 0.7
  top_p: 0.95
  stream: true
  max_tokens: 4096
  stop: []
  frequency_penalty: 0
  presence_penalty: 0

```

### temperature

- 类型：`float`

模型生成文本时的情感温度参数。

### top_p

- 类型：`float`

模型生成文本时的top-p参数，控制输出的概率分布范围。

### stream

- 类型：`bool`

指示模型是否以流式方式生成文本。

### max_tokens

- 类型：`int`

模型生成的最大令牌数。

### stop

- 类型：`array`
  
停止词列表。

### frequency_penalty

- 类型：`int`

频率惩罚参数，用于调整生成文本中词汇的频率。

### presence_penalty

- 类型：`int`

存在惩罚参数，用于调整生成文本中词汇的存在概率。

## metadata

记录 model 的元信息。

配置示例

```
metadata:
  author: NousResearch, The Bloke
  tags:
  - 7B
  - Finetuned
  size: 4370000000

```

### author

- 类型：`string`

模型的作者名称。

### tags

- 类型：`array`

标签列表，用于描述模型的属性或特征。

### size

- 类型：`int`

模型的大小。

### engine

- 类型：`string`

使用的模型引擎。