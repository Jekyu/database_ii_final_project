<div align="left">
    <img src="https://cdn-icons-png.flaticon.com/512/6295/6295417.png" width="40%" align="left" style="margin-right: 15px"/>
    <div style="display: inline-block;">
        <h2 style="display: inline-block; vertical-align: middle; margin-top: 0;">CLOUD-UD</h2>
        <p>
	<em></em>
</p>
        <p>
	<img src="https://img.shields.io/github/license/santiago-avella/cloud-ud.git?style=plastic&logo=opensourceinitiative&logoColor=white&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/santiago-avella/cloud-ud.git?style=plastic&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/santiago-avella/cloud-ud.git?style=plastic&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/santiago-avella/cloud-ud.git?style=plastic&color=0080ff" alt="repo-language-count">
</p>
        <p>Built with the tools and technologies:</p>
        <p>
	<img src="https://img.shields.io/badge/npm-CB3837.svg?style=plastic&logo=npm&logoColor=white" alt="npm">
	<img src="https://img.shields.io/badge/Mongoose-F04D35.svg?style=plastic&logo=Mongoose&logoColor=white" alt="Mongoose">
	<img src="https://img.shields.io/badge/Prettier-F7B93E.svg?style=plastic&logo=Prettier&logoColor=black" alt="Prettier">
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=plastic&logo=JavaScript&logoColor=black" alt="JavaScript">
	<img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=plastic&logo=TypeScript&logoColor=white" alt="TypeScript">
	<img src="https://img.shields.io/badge/tsnode-3178C6.svg?style=plastic&logo=ts-node&logoColor=white" alt="tsnode">
	<img src="https://img.shields.io/badge/ESLint-4B32C3.svg?style=plastic&logo=ESLint&logoColor=white" alt="ESLint">
	<img src="https://img.shields.io/badge/Jest-C21325.svg?style=plastic&logo=Jest&logoColor=white" alt="Jest">
</p>
    </div>
</div>
<br clear="left"/>

##  Table of Contents

- [ Overview](#-overview)
- [ Features](#-features)
- [ Project Structure](#-project-structure)
  - [ Project Index](#-project-index)
- [ Getting Started](#-getting-started)
  - [ Prerequisites](#-prerequisites)
  - [ Installation](#-installation)
  - [ Usage](#-usage)
  - [ Testing](#-testing)
- [ License](#-license)


---

##  Overview

❯The cloud-ud project is a project carried out during the mentoring of the Database II course in the Systems Engineering degree program. It is a cloud storage application similar to Dropbox, OneDrive, or Google Drive. It has a polyglot architecture with two databases, one relational and one non-SQL. It also integrates with the AWS ecosystem, storing files in an S3 bucket.</code>

---

##  Features

<code>
- Upload files of different types and formats with generous storage capacity per account
- Access files via temporary signed paths for security and control of user privacy and content
- Manage folder hierarchy and organize items for better distribution
- Custom extraction and saving of metadata according to file extension type, with a high level of detail in terms of complete item information
- Robust login authentication with temporary token to ensure secure access.
</code>

---

##  Project Structure

```sh
└── cloud-ud/
    ├── README.md
    ├── eslint.config.mjs
    ├── nest-cli.json
    ├── package-lock.json
    ├── package.json
    ├── src
    │   ├── account
    │   ├── app.controller.spec.ts
    │   ├── app.controller.ts
    │   ├── app.module.ts
    │   ├── app.service.ts
    │   ├── auth
    │   ├── bucket-s3
    │   ├── file-folder
    │   ├── main.ts
    │   ├── meta-data
    │   └── storage
    ├── test
    │   ├── app.e2e-spec.ts
    │   └── jest-e2e.json
    ├── tsconfig.build.json
    └── tsconfig.json
```


###  Project Index
<details open>
	<summary><b><code>CLOUD-UD.GIT/</code></b></summary>
	<details> <!-- __root__ Submodule -->
		<summary><b>__root__</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/santiago-avella/cloud-ud.git/blob/master/package-lock.json'>package-lock.json</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/santiago-avella/cloud-ud.git/blob/master/tsconfig.json'>tsconfig.json</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/santiago-avella/cloud-ud.git/blob/master/eslint.config.mjs'>eslint.config.mjs</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/santiago-avella/cloud-ud.git/blob/master/tsconfig.build.json'>tsconfig.build.json</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/santiago-avella/cloud-ud.git/blob/master/nest-cli.json'>nest-cli.json</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/santiago-avella/cloud-ud.git/blob/master/package.json'>package.json</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			</table>
		</blockquote>
	</details>
	<details> <!-- src Submodule -->
		<summary><b>src</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/santiago-avella/cloud-ud.git/blob/master/src/app.controller.ts'>app.controller.ts</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/santiago-avella/cloud-ud.git/blob/master/src/app.module.ts'>app.module.ts</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/santiago-avella/cloud-ud.git/blob/master/src/app.service.ts'>app.service.ts</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/santiago-avella/cloud-ud.git/blob/master/src/app.controller.spec.ts'>app.controller.spec.ts</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/santiago-avella/cloud-ud.git/blob/master/src/main.ts'>main.ts</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			</table>
			<details>
				<summary><b>meta-data</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/santiago-avella/cloud-ud.git/blob/master/src/meta-data/meta-data.module.ts'>meta-data.module.ts</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/santiago-avella/cloud-ud.git/blob/master/src/meta-data/meta-data.service.ts'>meta-data.service.ts</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/santiago-avella/cloud-ud.git/blob/master/src/meta-data/meta-data.controller.ts'>meta-data.controller.ts</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					</table>
					<details>
						<summary><b>schemas</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/santiago-avella/cloud-ud.git/blob/master/src/meta-data/schemas/file-metada.schema.ts'>file-metada.schema.ts</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
				</blockquote>
			</details>
			<details>
				<summary><b>bucket-s3</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/santiago-avella/cloud-ud.git/blob/master/src/bucket-s3/bucket-s3.service.ts'>bucket-s3.service.ts</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/santiago-avella/cloud-ud.git/blob/master/src/bucket-s3/bucket-s3.controller.ts'>bucket-s3.controller.ts</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/santiago-avella/cloud-ud.git/blob/master/src/bucket-s3/bucket-s3.module.ts'>bucket-s3.module.ts</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					</table>
					<details>
						<summary><b>providers</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/santiago-avella/cloud-ud.git/blob/master/src/bucket-s3/providers/aws-bucket.provide.ts'>aws-bucket.provide.ts</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
				</blockquote>
			</details>
			<details>
				<summary><b>account</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/santiago-avella/cloud-ud.git/blob/master/src/account/account.service.ts'>account.service.ts</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/santiago-avella/cloud-ud.git/blob/master/src/account/account.module.ts'>account.module.ts</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/santiago-avella/cloud-ud.git/blob/master/src/account/account.controller.ts'>account.controller.ts</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					</table>
					<details>
						<summary><b>http</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/santiago-avella/cloud-ud.git/blob/master/src/account/http/create-user.http'>create-user.http</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>entities</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/santiago-avella/cloud-ud.git/blob/master/src/account/entities/account.entity.ts'>account.entity.ts</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/santiago-avella/cloud-ud.git/blob/master/src/account/entities/info-account.entity.ts'>info-account.entity.ts</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>dto</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/santiago-avella/cloud-ud.git/blob/master/src/account/dto/register-account.dto.ts'>register-account.dto.ts</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/santiago-avella/cloud-ud.git/blob/master/src/account/dto/info-account.dto.ts'>info-account.dto.ts</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>enums</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/santiago-avella/cloud-ud.git/blob/master/src/account/enums/status-account.enum.ts'>status-account.enum.ts</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
				</blockquote>
			</details>
			<details>
				<summary><b>storage</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/santiago-avella/cloud-ud.git/blob/master/src/storage/storage.module.ts'>storage.module.ts</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/santiago-avella/cloud-ud.git/blob/master/src/storage/storage.service.ts'>storage.service.ts</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/santiago-avella/cloud-ud.git/blob/master/src/storage/storage.controller.ts'>storage.controller.ts</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					</table>
					<details>
						<summary><b>http</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/santiago-avella/cloud-ud.git/blob/master/src/storage/http/create-folder.http'>create-folder.http</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/santiago-avella/cloud-ud.git/blob/master/src/storage/http/get-info-storage.http'>get-info-storage.http</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/santiago-avella/cloud-ud.git/blob/master/src/storage/http/get-file-url.http'>get-file-url.http</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/santiago-avella/cloud-ud.git/blob/master/src/storage/http/get-folder.http'>get-folder.http</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/santiago-avella/cloud-ud.git/blob/master/src/storage/http/get-storage-root.http'>get-storage-root.http</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/santiago-avella/cloud-ud.git/blob/master/src/storage/http/get-metadata-file.http'>get-metadata-file.http</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>providers</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/santiago-avella/cloud-ud.git/blob/master/src/storage/providers/meta-data.abstract.ts'>meta-data.abstract.ts</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/santiago-avella/cloud-ud.git/blob/master/src/storage/providers/extract-meta-data.provider.ts'>extract-meta-data.provider.ts</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/santiago-avella/cloud-ud.git/blob/master/src/storage/providers/meta-data.factory.ts'>meta-data.factory.ts</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
							<details>
								<summary><b>consts</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/santiago-avella/cloud-ud.git/blob/master/src/storage/providers/consts/type-file.const.ts'>type-file.const.ts</a></b></td>
										<td><code>❯ REPLACE-ME</code></td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/santiago-avella/cloud-ud.git/blob/master/src/storage/providers/consts/rules-upload.const.ts'>rules-upload.const.ts</a></b></td>
										<td><code>❯ REPLACE-ME</code></td>
									</tr>
									</table>
								</blockquote>
							</details>
							<details>
								<summary><b>strategies</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/santiago-avella/cloud-ud.git/blob/master/src/storage/providers/strategies/xlsx.strategy.ts'>xlsx.strategy.ts</a></b></td>
										<td><code>❯ REPLACE-ME</code></td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/santiago-avella/cloud-ud.git/blob/master/src/storage/providers/strategies/pdf.strategy.ts'>pdf.strategy.ts</a></b></td>
										<td><code>❯ REPLACE-ME</code></td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/santiago-avella/cloud-ud.git/blob/master/src/storage/providers/strategies/mp4.strategy.ts'>mp4.strategy.ts</a></b></td>
										<td><code>❯ REPLACE-ME</code></td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/santiago-avella/cloud-ud.git/blob/master/src/storage/providers/strategies/docx.strategy.ts'>docx.strategy.ts</a></b></td>
										<td><code>❯ REPLACE-ME</code></td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/santiago-avella/cloud-ud.git/blob/master/src/storage/providers/strategies/pptx.strategy.ts'>pptx.strategy.ts</a></b></td>
										<td><code>❯ REPLACE-ME</code></td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/santiago-avella/cloud-ud.git/blob/master/src/storage/providers/strategies/mpeg.strategy.ts'>mpeg.strategy.ts</a></b></td>
										<td><code>❯ REPLACE-ME</code></td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/santiago-avella/cloud-ud.git/blob/master/src/storage/providers/strategies/jpge.strategy.ts'>jpge.strategy.ts</a></b></td>
										<td><code>❯ REPLACE-ME</code></td>
									</tr>
									</table>
								</blockquote>
							</details>
						</blockquote>
					</details>
					<details>
						<summary><b>entities</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/santiago-avella/cloud-ud.git/blob/master/src/storage/entities/storage-plans.entity.ts'>storage-plans.entity.ts</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/santiago-avella/cloud-ud.git/blob/master/src/storage/entities/storage-space.entity.ts'>storage-space.entity.ts</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>interfaces</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/santiago-avella/cloud-ud.git/blob/master/src/storage/interfaces/metada-base.interface.ts'>metada-base.interface.ts</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>enum</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/santiago-avella/cloud-ud.git/blob/master/src/storage/enum/space-plans.enum.ts'>space-plans.enum.ts</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/santiago-avella/cloud-ud.git/blob/master/src/storage/enum/status-storage.enum.ts'>status-storage.enum.ts</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>dtos</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/santiago-avella/cloud-ud.git/blob/master/src/storage/dtos/upload-file.dto.ts'>upload-file.dto.ts</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/santiago-avella/cloud-ud.git/blob/master/src/storage/dtos/create-folder.dto.ts'>create-folder.dto.ts</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
				</blockquote>
			</details>
			<details>
				<summary><b>auth</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/santiago-avella/cloud-ud.git/blob/master/src/auth/auth.module.ts'>auth.module.ts</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/santiago-avella/cloud-ud.git/blob/master/src/auth/auth.service.ts'>auth.service.ts</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/santiago-avella/cloud-ud.git/blob/master/src/auth/auth.controller.ts'>auth.controller.ts</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					</table>
					<details>
						<summary><b>http</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/santiago-avella/cloud-ud.git/blob/master/src/auth/http/login.http'>login.http</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>providers</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/santiago-avella/cloud-ud.git/blob/master/src/auth/providers/bcrypt.provider.ts'>bcrypt.provider.ts</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>interfaces</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/santiago-avella/cloud-ud.git/blob/master/src/auth/interfaces/payload-user.interface.ts'>payload-user.interface.ts</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>guards</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/santiago-avella/cloud-ud.git/blob/master/src/auth/guards/jwt.guard.ts'>jwt.guard.ts</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>dtos</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/santiago-avella/cloud-ud.git/blob/master/src/auth/dtos/login.dto.ts'>login.dto.ts</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
				</blockquote>
			</details>
			<details>
				<summary><b>file-folder</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/santiago-avella/cloud-ud.git/blob/master/src/file-folder/file-folder.module.ts'>file-folder.module.ts</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/santiago-avella/cloud-ud.git/blob/master/src/file-folder/file-folder.controller.ts'>file-folder.controller.ts</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/santiago-avella/cloud-ud.git/blob/master/src/file-folder/file-folder.service.ts'>file-folder.service.ts</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					</table>
					<details>
						<summary><b>entities</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/santiago-avella/cloud-ud.git/blob/master/src/file-folder/entities/file.entity.ts'>file.entity.ts</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/santiago-avella/cloud-ud.git/blob/master/src/file-folder/entities/folder.entity.ts'>folder.entity.ts</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>interfaces</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/santiago-avella/cloud-ud.git/blob/master/src/file-folder/interfaces/create-file.interface.ts'>create-file.interface.ts</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
				</blockquote>
			</details>
		</blockquote>
	</details>
	<details> <!-- test Submodule -->
		<summary><b>test</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/santiago-avella/cloud-ud.git/blob/master/test/app.e2e-spec.ts'>app.e2e-spec.ts</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/santiago-avella/cloud-ud.git/blob/master/test/jest-e2e.json'>jest-e2e.json</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			</table>
		</blockquote>
	</details>
</details>

---
##  Getting Started

###  Prerequisites

Before getting started with cloud-ud.git, ensure your runtime environment meets the following requirements:

- **Programming Language:** TypeScript
- **Package Manager:** Npm


###  Installation

Install cloud-ud.git using one of the following methods:

**Build from source:**

1. Clone the cloud-ud.git repository:
```sh
❯ git clone https://github.com/santiago-avella/cloud-ud.git
```

2. Navigate to the project directory:
```sh
❯ cd cloud-ud.git
```

3. Install the project dependencies:


**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm install
```




###  Usage
Run cloud-ud.git using the following command:
**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm start
```


###  Testing
Run the test suite using the following command:
**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm test
```


---

---

##  Contributing


<details closed>
<summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your github account.
2. **Clone Locally**: Clone the forked repository to your local machine using a git client.
   ```sh
   git clone https://github.com/santiago-avella/cloud-ud.git
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to github**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.
8. **Review**: Once your PR is reviewed and approved, it will be merged into the main branch. Congratulations on your contribution!
</details>

<details closed>
<summary>Contributor Graph</summary>
<br>
<p align="left">
   <a href="https://github.com{/santiago-avella/cloud-ud.git/}graphs/contributors">
      <img src="https://contrib.rocks/image?repo=santiago-avella/cloud-ud.git">
   </a>
</p>
</details>

---

##  License

This project is protected under the MIT License. For more details, refer to the [LICENSE](https://mit-license.org/) file.

---
---
