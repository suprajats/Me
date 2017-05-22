﻿using System.Collections.Generic;
using System.Linq;
using System;
using CrEST.Data.Models;
using CrEST.Models;
using System.Data.Common;
using Microsoft.EntityFrameworkCore;
using System.Data;
using System.Data.SqlClient;

namespace CrEST.BL
{
    public class ApplicationRepository : IApplicationRepository
    {
        public IEnumerable<ApplicationData> FindApplication(int contractId, string serviceLine, string application)
        {

            return GetApplications(contractId, serviceLine, application);
        }

        public IEnumerable<ApplicationData> GetAllApplications()
        {
            return GetApplications(0, string.Empty, string.Empty);
        }

		public ApplicationData GetById(int item)
		{
			using (CrESTContext db = new CrESTContext())
			{
				db.Database.OpenConnection();
				DbCommand cmd = db.Database.GetDbConnection().CreateCommand();
				cmd.CommandText = "spGetApplicationById";
				cmd.CommandType = CommandType.StoredProcedure;
				cmd.Parameters.Add(new SqlParameter("@ApplicationId", item));

				ApplicationData existingItem = new ApplicationData();

				using (var reader = cmd.ExecuteReader())
				{
					while (reader.Read())
					{												
						existingItem.ApplicationId = reader.GetInt32(0);
						existingItem.SupplierId = reader.GetInt32(1);
						existingItem.SupplierName = reader.GetString(2);
						existingItem.ContractId = reader.GetInt32(3);
						existingItem.ServiceLine = reader.GetString(4);
						existingItem.Application = reader.GetString(5);
						existingItem.ServiceClass = reader.IsDBNull(6) ? default(int) : reader.GetInt32(6);
						existingItem.RunOrGrow = reader.IsDBNull(7) ? default(int) : reader.GetInt32(7);
						existingItem.ApplicationGroup = reader.GetString(8);
						existingItem.StartDate = reader.GetDateTime(9);
						existingItem.EndDate = reader.GetDateTime(10);
						existingItem.EndToEnd = reader.GetBoolean(11);
						existingItem.Epm = reader.GetBoolean(12);
						existingItem.TM = reader.GetString(13);
						existingItem.ManagedCapacity = reader.GetString(14);
						existingItem.ManagedService = reader.GetString(15);
						existingItem.SoftwareAssetSearchableId = reader.GetString(16);
						existingItem.Remarks = reader.IsDBNull(17) ? string.Empty : reader.GetString(17);
						existingItem.OwnerAlias = reader.GetString(18);
						existingItem.ITOrgName = reader.IsDBNull(19) ? default(int) : reader.GetInt32(19);
                        existingItem.SoWid = reader.GetInt32(20);
                    }				
				}

				return existingItem;
			}			
		}

		public ApplicationMetadata GetApplicatonMetadata()
        {
            ApplicationMetadata data = new ApplicationMetadata();

            using (CrESTContext _context = new CrESTContext())
            {
                data.ContractIds = _context.SoW.Where(x => x.ContractId != null).Select(x => x.ContractId.Value).Distinct().ToList();
                data.ItOrg = _context.Itorg.ToList();
                data.Suppliers = _context.Supplier.ToList();
            }

            return data;
        }

        public ApplicationData SaveApplication(ApplicationData application)
        {
            using (CrESTContext _context = new CrESTContext())
            {
				Application existingItem = _context.Application.Where(s => s.ApplicationId == application.ApplicationId).SingleOrDefault();

				if (existingItem == null)
				{
					existingItem = new Application();
				}

				existingItem.Application1 = application.Application;
                existingItem.ApplicationGroup = application.ApplicationGroup;
				existingItem.EndDate = application.EndDate;
				existingItem.EndToEnd = application.EndToEnd;
				existingItem.Epm = application.Epm;
				existingItem.Itorg = application.Itorg;
				existingItem.ManagedCapacity = application.ManagedCapacity;
				existingItem.ManagedService = application.ManagedService;
				existingItem.OwnerAlias = application.OwnerAlias;
				existingItem.RunOrGrow = application.RunOrGrow;
				existingItem.ServiceClass = application.ServiceClass;
				existingItem.Remarks = application.Remarks;
				existingItem.ServiceLine = application.ServiceLine;
				existingItem.SoftwareAssetSearchableId = application.SoftwareAssetSearchableId;
				existingItem.SoWid = _context.SoW.Where(x => x.ContractId == application.ContractId).FirstOrDefault().SoWid;
				existingItem.StartDate = application.StartDate;
				existingItem.TM = application.TM;
				existingItem.SupplierId = application.SupplierId;


                if (existingItem.ApplicationId == 0) 
                    _context.Application.Add(existingItem);

                _context.SaveChanges();
                return application;
            }
        }

        private List<ApplicationData> GetApplications(int contractId, string serviceLine, string application)
        {
            List<ApplicationData> applications = new List<ApplicationData>();

            using (CrESTContext db = new CrESTContext())
            {
                db.Database.OpenConnection();
                DbCommand cmd = db.Database.GetDbConnection().CreateCommand();
                cmd.CommandText = "spSearchApplication";
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.Add(new SqlParameter("@ContractId", contractId));
                cmd.Parameters.Add(new SqlParameter("@ServiceLine", serviceLine));
                cmd.Parameters.Add(new SqlParameter("@Application", application));

                using (var reader = cmd.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        applications.Add(new ApplicationData()
                        {
                            ApplicationId = reader.GetInt32(0),
                            SupplierName = reader.GetString(1),
                            ContractId = reader.GetInt32(2),
                            ServiceLine = reader.GetString(3),
                            Application = reader.GetString(4),
                            ServiceClass = reader.IsDBNull(5) ? default(int) : reader.GetInt32(5),
                            RunOrGrow = reader.IsDBNull(6) ? default(int) : reader.GetInt32(6),
                            ApplicationGroup = reader.GetString(7),
                            StartDate = reader.GetDateTime(8),
                            EndDate = reader.GetDateTime(9),
                            EndToEnd = reader.GetBoolean(10),
                            Epm = reader.GetBoolean(11),
                            TM = reader.GetString(12),
                            ManagedCapacity = reader.GetString(13),
                            ManagedService = reader.GetString(14),
                            SoftwareAssetSearchableId = reader.GetString(15),
                            Remarks = reader.IsDBNull(16) ? string.Empty : reader.GetString(16),
                            OwnerAlias = reader.GetString(17),
                            ITOrgName = reader.IsDBNull(18) ? default(int) : reader.GetInt32(18),
                            SoWid = reader.GetInt32(19)

                    });
                    }
                }
            }

            return applications;
        }
    }
}

