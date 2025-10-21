## Information Requirements

This section establishes the data foundations necessary for the operation and analysis of the cloud-based storage platform. The identified information domains correspond to the system’s main functional areas and guarantee that data remains consistent, accessible, and secure across all user interactions.

The primary categories include:
- **User Data:** Records user credentials, personal details, and access permissions to ensure authentication, authorization, and profile management.
- **File Metadata:** Contains attributes such as file name, size, type, creation date, and hierarchical location, enabling users to navigate and organize their files efficiently.
- **Storage Utilization Data:** Tracks the total and available storage capacity for each user plan, ensuring real-time feedback and usage monitoring.
- **Subscription and Payment Records:** Manage membership types, duration, and renewal cycles, linking technical capacity to the financial model.
- **Activity Logs:** Register every operation performed by the user (uploads, deletions, downloads) to ensure traceability, security, and auditability.

Defining these data categories supports the alignment between the business model, user stories, and technical implementation, ensuring that the information captured fulfills both functional and strategic goals.

---

## Query Proposals

This section translates the information requirements into practical data access strategies. The project adopts a **polyglot persistence approach**, combining relational and non-relational queries to cover different data needs.

- **Relational Queries (SQL):** Focus on structured and transactional data stored in PostgreSQL. Example operations include listing all files owned by a user, checking total storage used, and validating subscription validity.
- **Non-Relational Queries (NoSQL):** Designed for MongoDB, which stores unstructured metadata. These queries enable flexible searches, such as filtering by tags, document types, or extracted text fields.

By combining SQL and NoSQL, the architecture achieves both **data integrity** and **query flexibility**, optimizing information retrieval for analytics, user interaction, and administrative functions.

---

## Data System Architecture

The proposed architecture follows a **three-tier model** integrated with a **polyglot persistence framework** to ensure scalability, modularity, and security in data handling.

1. **Presentation Layer:** Manages the user interface and API endpoints that connect users to the system. This layer ensures intuitive interaction, clear navigation, and secure communication via HTTPS.
2. **Business Logic Layer:** Acts as the orchestrator of system operations. It handles workflows such as file validation, quota control, and transaction management. The SAGA pattern is implemented to guarantee distributed consistency among different storage systems.
3. **Data Layer:** Integrates three main technologies:
   - **PostgreSQL** for structured data, ensuring relational integrity among users, folders, and files.
   - **MongoDB** for unstructured metadata, allowing dynamic and schema-free growth.
   - **AWS S3** for binary file storage, leveraging pre-signed URLs for secure and temporary access.

The architecture ensures that data flows seamlessly: user actions are first recorded in the relational database, corresponding metadata is stored in MongoDB, and the physical files are managed through S3. This integration guarantees transactional reliability and efficient scaling under concurrent access.

---

## Justification of Technologies

The technological decisions were made based on the need to balance **performance, reliability, and adaptability** in a cloud-native environment.

- **PostgreSQL** was selected for its ACID properties and ability to enforce complex relationships between entities, crucial for authentication and file tracking.
- **MongoDB** complements the relational model by managing heterogeneous metadata and supporting fast, flexible queries without schema constraints.
- **Amazon S3** offers highly available and durable object storage, capable of handling large file volumes while minimizing operational overhead. Its integration through pre-signed URLs enhances both efficiency and security.

This technological stack enables modular development, facilitates future integrations, and ensures the system can adapt to increased demand without compromising stability.
 
--

All this items are compiled into a single PDF
- [[Workshop-2.pdf]]
